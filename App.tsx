
import React, { useState, useCallback } from 'react';
import { QUIZ_QUESTIONS, RESULTS } from './constants';
import { OptionType, QuizState, ResultType } from './types';
import Intro from './components/Intro';
import QuestionCard from './components/QuestionCard';
import EmailGate from './components/EmailGate';
import ResultCard from './components/ResultCard';
import ProcessingScreen from './components/ProcessingScreen';

function App() {
  const [state, setState] = useState<QuizState>('INTRO');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loadingProps, setLoadingProps] = useState({ text: '', steps: [] as string[] });

  const startQuiz = () => setState('QUIZ');

  const handleAnswer = (answer: any) => {
    const questionId = QUIZ_QUESTIONS[currentQuestionIndex].id;
    const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];
    
    const newAnswers = { ...answers, [questionId]: answer };
    
    if (currentQ.id === 1) newAnswers['barberName'] = answer;
    if (currentQ.id === 4) newAnswers['revenue'] = answer;

    setAnswers(newAnswers);

    if (currentQ.type === 'simulator') {
      setLoadingProps({
        text: 'Calculando projeção de crescimento...',
        steps: ['Analisando margem atual...', 'Aplicando modelo de recorrência...', 'Projetando lucro futuro...']
      });
      setState('CALCULATING');
    } else if (currentQ.id === 4) { 
      setLoadingProps({
        text: 'Analisando seus números...',
        steps: ['Comparando com média nacional...', 'Identificando gargalos...', 'Validando potencial...']
      });
      setState('CALCULATING');
    } else if (currentQuestionIndex === QUIZ_QUESTIONS.length - 1) {
      setLoadingProps({
        text: 'Gerando Diagnóstico Final...',
        steps: ['Compilando respostas...', 'Criando plano personalizado...', 'Finalizando relatório...']
      });
      setState('CALCULATING');
    } else {
      setTimeout(() => {
        advanceQuestion();
      }, 300);
    }
  };

  const handleProcessingComplete = () => {
    if (currentQuestionIndex === QUIZ_QUESTIONS.length - 1) {
       setState('EMAIL');
    } else {
       advanceQuestion();
    }
  };

  const advanceQuestion = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
    setState('QUIZ');
  };

  const calculateResult = useCallback((): ResultType => {
    let score = 0;
    if ((answers[4] || 0) > 5000) score += 2;
    if (answers[5] === OptionType.A || answers[5] === OptionType.B) score += 2;
    if (answers[9] === OptionType.A) score += 3;

    if (score >= 6) return ResultType.PERFECT_CANDIDATE;
    if (score >= 4) return ResultType.UNDERSTANDS_GAME;
    return ResultType.HAS_POTENTIAL;
  }, [answers]);

  const handleEmailSubmit = (email: string) => {
    setUserEmail(email);
    setState('RESULT');
  };

  const renderContent = () => {
    switch (state) {
      case 'INTRO':
        return <Intro onStart={startQuiz} />;
      
      case 'CALCULATING':
        return (
          <ProcessingScreen 
            loadingText={loadingProps.text} 
            steps={loadingProps.steps}
            onComplete={handleProcessingComplete}
          />
        );

      case 'QUIZ':
        const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
        if (!currentQuestion) return null;
        
        return (
          <div className="container mx-auto px-4 max-w-2xl">
            <QuestionCard
              question={currentQuestion}
              totalQuestions={QUIZ_QUESTIONS.length}
              currentIndex={currentQuestionIndex}
              onAnswer={handleAnswer}
              savedData={answers}
            />
          </div>
        );
        
      case 'EMAIL':
        return <EmailGate onSubmit={handleEmailSubmit} />;
      case 'RESULT':
        const resultType = calculateResult();
        const barberName = answers['barberName'] || '';
        return <ResultCard result={RESULTS[resultType]} resultType={resultType} barberName={barberName} />;
      default:
        return null;
    }
  };

  const getAppBackground = () => {
    switch (state) {
      case 'INTRO': return 'bg-gradient-to-b from-brand-dark to-brand-gray text-white';
      case 'RESULT': return 'bg-white';
      default: return 'bg-brand-light text-brand-text';
    }
  };

  const isFullWidth = state === 'RESULT';
  const mainClasses = isFullWidth 
    ? "flex-grow w-full" 
    : "flex-grow flex flex-col items-center py-6 md:py-10 w-full";

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${getAppBackground()}`}>
      <header className={`${state === 'INTRO' ? 'bg-brand-dark/80 border-white/10' : state === 'RESULT' ? 'bg-brand-dark border-b border-gray-800' : 'bg-gradient-to-b from-brand-dark to-brand-gray border-brand-gold/20 shadow-md'} backdrop-blur-sm border-b py-3 md:py-4 sticky top-0 z-50 transition-all`}>
        <div className="container mx-auto px-4 relative flex items-center justify-center min-h-[40px]">
          {/* Logo Centralizado */}
          <div className="text-base md:text-xl font-heading font-bold text-white tracking-[0.2em] uppercase text-center">
             RICARDO <span className="text-brand-gold">FEITOZA</span>
          </div>
         
         {/* Botão posicionado absolutamente à direita para não afetar o centro */}
         {state === 'RESULT' && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden sm:block">
              <button className="text-brand-gold border border-brand-gold px-3 py-1.5 rounded hover:bg-brand-gold hover:text-brand-dark transition-colors text-xs font-bold uppercase tracking-widest">
                Liberar Acesso
              </button>
            </div>
         )}
        </div>
      </header>

      <main className={mainClasses}>
        {renderContent()}
      </main>

      <footer className={`py-6 md:py-8 text-center text-[10px] md:text-sm ${state === 'RESULT' ? 'bg-brand-dark text-brand-textLight' : 'text-brand-textLight'}`}>
        <div className="container mx-auto px-4">
          <p className="font-heading opacity-70">&copy; {new Date().getFullYear()} Ricardo Feitoza. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
