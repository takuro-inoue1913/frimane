import { useAtomValue } from 'jotai';

import { idTokenState, userState } from '@src/states/user';
import Toast from 'react-native-toast-message';
import { fridgeMasterState } from '@src/states/fridge';
import { vegetableStockRepository } from '@src/interface/repositories/vegetableStockRepository';
import { stapleFoodStockRepository } from '@src/interface/repositories/stapleFoodStockRepository';
import { spiceStockRepository } from '@src/interface/repositories/spiceStockRepository';
import { seasoningStockRepository } from '@src/interface/repositories/seasoningStockRepository';
import { proteinSourceStockRepository } from '@src/interface/repositories/proteinSourceStockRepository';
import { otherStockRepository } from '@src/interface/repositories/otherStockRepository';
import { meatStockRepository } from '@src/interface/repositories/meatStockRepository';
import { fishStockRepository } from '@src/interface/repositories/fishStockRepository';
import { dessertStockRepository } from '@src/interface/repositories/dessertStockRepository';
import { getIncrementalUnit } from '@src/utils/logics/getIncrementalUnit';

type AddFridgeMasterStockArgs = {
  masterId: string;
  quantity: number;
};

export const useRequestAddFridgeMasterStock = () => {
  const idToken = useAtomValue(idTokenState);
  const user = useAtomValue(userState);
  const fridgeMaster = useAtomValue(fridgeMasterState);

  const reject = (error: unknown) => {
    Toast.show({
      type: 'error',
      text1: 'サーバーエラーが発生しました',
      text2: '時間をおいて再度お試しください',
    });
    return Promise.reject(error);
  };

  return async (args: AddFridgeMasterStockArgs) => {
    if (!user) {
      return Promise.reject(new Error('user is not defined'));
    }
    const targetFridgeMaster = fridgeMaster.find(
      (master) => master.id === args.masterId,
    );
    if (!targetFridgeMaster) {
      return Promise.reject(new Error('fridgeType is not defined'));
    }
    switch (targetFridgeMaster.fridgeType) {
      case 'vegetable_master':
      case 'custom_vegetable_master': {
        try {
          if (targetFridgeMaster.hasStock) {
            const data = await vegetableStockRepository.updateQuantity({
              idToken,
              userId: user.uid,
              vegetableId: targetFridgeMaster.id,
              quantity: args.quantity + targetFridgeMaster.quantity,
              defaultExpirationPeriod:
                targetFridgeMaster.defaultExpirationPeriod,
            });
            return Promise.resolve(data);
          } else {
            const data = await vegetableStockRepository.insert({
              idToken,
              userId: user.uid,
              vegetableId: targetFridgeMaster.id,
              quantity: args.quantity,
              incrementalUnit: getIncrementalUnit(targetFridgeMaster.unitName),
              defaultExpirationPeriod:
                targetFridgeMaster.defaultExpirationPeriod,
            });
            return Promise.resolve(data);
          }
        } catch (error) {
          reject(error);
        }
        break;
      }
      case 'dessert_master':
      case 'custom_dessert_master': {
        try {
          if (targetFridgeMaster.hasStock) {
            const data = await dessertStockRepository.updateQuantity({
              idToken,
              userId: user.uid,
              dessertId: targetFridgeMaster.id,
              quantity: args.quantity + targetFridgeMaster.quantity,
              defaultExpirationPeriod:
                targetFridgeMaster.defaultExpirationPeriod,
            });
            return Promise.resolve(data);
          } else {
            const data = await dessertStockRepository.insert({
              idToken,
              userId: user.uid,
              dessertId: targetFridgeMaster.id,
              quantity: args.quantity,
              incrementalUnit: getIncrementalUnit(targetFridgeMaster.unitName),
              defaultExpirationPeriod:
                targetFridgeMaster.defaultExpirationPeriod,
            });
            return Promise.resolve(data);
          }
        } catch (error) {
          reject(error);
        }
        break;
      }
      case 'fish_master':
      case 'custom_fish_master': {
        try {
          if (targetFridgeMaster.hasStock) {
            const data = await fishStockRepository.updateQuantity({
              idToken,
              userId: user.uid,
              fishId: targetFridgeMaster.id,
              quantity: args.quantity + targetFridgeMaster.quantity,
              defaultExpirationPeriod:
                targetFridgeMaster.defaultExpirationPeriod,
            });
            return Promise.resolve(data);
          } else {
            const data = await fishStockRepository.insert({
              idToken,
              userId: user.uid,
              fishId: targetFridgeMaster.id,
              quantity: args.quantity,
              incrementalUnit: getIncrementalUnit(targetFridgeMaster.unitName),
              defaultExpirationPeriod:
                targetFridgeMaster.defaultExpirationPeriod,
            });
            return Promise.resolve(data);
          }
        } catch (error) {
          reject(error);
        }
        break;
      }
      case 'meat_master':
      case 'custom_meat_master': {
        try {
          if (targetFridgeMaster.hasStock) {
            const data = await meatStockRepository.updateQuantity({
              idToken,
              userId: user.uid,
              meatId: targetFridgeMaster.id,
              quantity: args.quantity + targetFridgeMaster.quantity,
              defaultExpirationPeriod:
                targetFridgeMaster.defaultExpirationPeriod,
            });
            return Promise.resolve(data);
          } else {
            const data = await meatStockRepository.insert({
              idToken,
              userId: user.uid,
              meatId: targetFridgeMaster.id,
              quantity: args.quantity,
              incrementalUnit: getIncrementalUnit(targetFridgeMaster.unitName),
              defaultExpirationPeriod:
                targetFridgeMaster.defaultExpirationPeriod,
            });
            return Promise.resolve(data);
          }
        } catch (error) {
          reject(error);
        }
        break;
      }
      case 'other_master':
      case 'custom_other_master': {
        try {
          if (targetFridgeMaster.hasStock) {
            const data = await otherStockRepository.updateQuantity({
              idToken,
              userId: user.uid,
              otherId: targetFridgeMaster.id,
              quantity: args.quantity + targetFridgeMaster.quantity,
              defaultExpirationPeriod:
                targetFridgeMaster.defaultExpirationPeriod,
            });
            return Promise.resolve(data);
          } else {
            const data = await otherStockRepository.insert({
              idToken,
              userId: user.uid,
              otherId: targetFridgeMaster.id,
              quantity: args.quantity,
              incrementalUnit: getIncrementalUnit(targetFridgeMaster.unitName),
              defaultExpirationPeriod:
                targetFridgeMaster.defaultExpirationPeriod,
            });
            return Promise.resolve(data);
          }
        } catch (error) {
          reject(error);
        }
        break;
      }
      case 'protein_source_master':
      case 'custom_protein_source_master': {
        try {
          if (targetFridgeMaster.hasStock) {
            const data = await proteinSourceStockRepository.updateQuantity({
              idToken,
              userId: user.uid,
              proteinSourceId: targetFridgeMaster.id,
              quantity: args.quantity + targetFridgeMaster.quantity,
              defaultExpirationPeriod:
                targetFridgeMaster.defaultExpirationPeriod,
            });
            return Promise.resolve(data);
          } else {
            const data = await proteinSourceStockRepository.insert({
              idToken,
              userId: user.uid,
              proteinSourceId: targetFridgeMaster.id,
              quantity: args.quantity,
              incrementalUnit: getIncrementalUnit(targetFridgeMaster.unitName),
              defaultExpirationPeriod:
                targetFridgeMaster.defaultExpirationPeriod,
            });
            return Promise.resolve(data);
          }
        } catch (error) {
          reject(error);
        }
        break;
      }
      case 'seasoning_master':
      case 'custom_seasoning_master': {
        try {
          if (targetFridgeMaster.hasStock) {
            const data = await seasoningStockRepository.updateQuantity({
              idToken,
              userId: user.uid,
              seasoningId: targetFridgeMaster.id,
              quantity: args.quantity + targetFridgeMaster.quantity,
              defaultExpirationPeriod:
                targetFridgeMaster.defaultExpirationPeriod,
            });
            return Promise.resolve(data);
          } else {
            const data = await seasoningStockRepository.insert({
              idToken,
              userId: user.uid,
              seasoningId: targetFridgeMaster.id,
              quantity: args.quantity,
              incrementalUnit: getIncrementalUnit(targetFridgeMaster.unitName),
              defaultExpirationPeriod:
                targetFridgeMaster.defaultExpirationPeriod,
            });
            return Promise.resolve(data);
          }
        } catch (error) {
          reject(error);
        }
        break;
      }
      case 'spice_master':
      case 'custom_spice_master': {
        try {
          if (targetFridgeMaster.hasStock) {
            const data = await spiceStockRepository.updateQuantity({
              idToken,
              userId: user.uid,
              spiceId: targetFridgeMaster.id,
              quantity: args.quantity + targetFridgeMaster.quantity,
              defaultExpirationPeriod:
                targetFridgeMaster.defaultExpirationPeriod,
            });
            return Promise.resolve(data);
          } else {
            const data = await spiceStockRepository.insert({
              idToken,
              userId: user.uid,
              spiceId: targetFridgeMaster.id,
              quantity: args.quantity,
              incrementalUnit: getIncrementalUnit(targetFridgeMaster.unitName),
              defaultExpirationPeriod:
                targetFridgeMaster.defaultExpirationPeriod,
            });
            return Promise.resolve(data);
          }
        } catch (error) {
          reject(error);
        }
        break;
      }
      case 'staple_food_master':
      case 'custom_staple_food_master': {
        try {
          if (targetFridgeMaster.hasStock) {
            const data = await stapleFoodStockRepository.updateQuantity({
              idToken,
              userId: user.uid,
              stapleFoodId: targetFridgeMaster.id,
              quantity: args.quantity + targetFridgeMaster.quantity,
              defaultExpirationPeriod:
                targetFridgeMaster.defaultExpirationPeriod,
            });
            return Promise.resolve(data);
          } else {
            const data = await stapleFoodStockRepository.insert({
              idToken,
              userId: user.uid,
              stapleFoodId: targetFridgeMaster.id,
              quantity: args.quantity,
              incrementalUnit: getIncrementalUnit(targetFridgeMaster.unitName),
              defaultExpirationPeriod:
                targetFridgeMaster.defaultExpirationPeriod,
            });
            return Promise.resolve(data);
          }
        } catch (error) {
          reject(error);
        }
        break;
      }
    }
  };
};
