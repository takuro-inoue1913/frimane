import { atom } from 'jotai';
import { UserInfo } from 'firebase/auth';

export const userState = atom<UserInfo | null>(null);

export const idTokenState = atom<string | null>(null);
