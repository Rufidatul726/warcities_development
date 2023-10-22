import { MouseEventHandler } from "react";


export interface TournamentProps {
  name: string;
  id: string;
  image: string;
  description: string;
  start_date: string;
  end_date: string;
  prize_pool: number;
  prize_pool_currency: string;
  game: GameProps;
  featured: boolean;
  status: string;
  platforms: string[];
  organizer: OrganizerProps;
}

export interface OrganizerProps {
  name: string;
  id: string;
  image: string;
  location: string;
  description: string;
  facebook_url: string;
  twitter_url: string;
  website_url: string;
}

export interface GameProps {
  name: string;
  id: string;
  image: string;
  description: string;
  type: string;
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CustomInputProps {
  containerStyles?: string;
  inputStyles?: string;
  labelStyles?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CustomFormProps {
  containerStyles?: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

export interface CustomCarouselProps {
  src1: string;
  src2: string;
  src3: string;
  src4: string;
  src5: string;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchTournamentProps {
  tournament: string;
  setTournament: (tournament: string) => void;
}

export interface CustomErrorProps {
  message: string;
}