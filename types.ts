
export enum OptionType {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  // Extended types for visual choices
  CLASSIC = 'CLASSIC',
  MODERN = 'MODERN',
  LUXURY = 'LUXURY',
  STREET = 'STREET',
  SOLO = 'SOLO',
  SMALL_TEAM = 'SMALL_TEAM',
  BIG_TEAM = 'BIG_TEAM',
}

export type QuestionType = 'choice' | 'text' | 'range' | 'simulator' | 'image-choice' | 'multiselect' | 'team-size';

export interface Option {
  id: OptionType | string;
  text: string;
  icon?: any; // For visual components
}

export interface RangeConfig {
  min: number;
  max: number;
  step: number;
  prefix: string;
  labelLow: string;
  labelHigh: string;
}

export interface Question {
  id: number;
  type: QuestionType;
  text: string;
  subText?: string; 
  options?: Option[]; 
  placeholder?: string; 
  rangeConfig?: RangeConfig; 
  microCopy: string;
}

export interface ResultContent {
  title: string;
  description: string;
  ctaText: string;
  ctaLink?: string;
  highlightColor: string;
  priceDisplay?: boolean;
}

export enum ResultType {
  PERFECT_CANDIDATE = 'PERFECT_CANDIDATE',
  UNDERSTANDS_GAME = 'UNDERSTANDS_GAME',
  MINDSET_SHIFT = 'MINDSET_SHIFT',
  NOT_READY = 'NOT_READY',
  HAS_POTENTIAL = 'HAS_POTENTIAL',
}

export type QuizState = 'INTRO' | 'QUIZ' | 'CALCULATING' | 'EMAIL' | 'RESULT';
