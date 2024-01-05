import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  InputHTMLAttributes,
} from 'react';

export type TNormalElementProps<Element> = DetailedHTMLProps<
  HTMLAttributes<Element>,
  Element
>;

export type TInputElementProps<Element = HTMLInputElement> = DetailedHTMLProps<
  InputHTMLAttributes<Element>,
  Element
>;

export type TButtonElementProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;


export interface IProduct {
  _id: string;
  user: string;

  name: string;
  brand: string;
  category: string;
  description: string;
  rating: number;
  numReviews: number;
  threeValue: number;
  price: number;

  countInStock: number;
  review: string;
  __v: number;
  createAt: string;
  updatedt: string;
}

export type IProducts = IProduct[]
