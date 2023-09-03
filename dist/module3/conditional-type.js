"use strict";
// // a type is dependent on another type
// type a1 = number;
// type a3 = undefined;
// type a4 = number;
// type a2 = a1 extends string ? string : null;
// // nested conditional type
// type d = a1 extends null ? null : a3 extends number ? number : a4 extends null ? null : never;
// type Sheikh = {
//     wife1: string;
//     wife2: string;
// }
// type A = keyof Sheikh;
// type CheckProperty<T, K> = K extends keyof T ? true : false;
// type CheckWife2 = CheckProperty<Sheikh, 'wife1'>;
// // Matha Kharap Example
// type Bandhubi = 'Monika' | 'Rachel' | 'Pheobe';
// type RemoveBandhubi<T, K> = T extends K ? never : T;
// type CurrentBandhubi = RemoveBandhubi<Bandhubi, 'Rachel'>;
