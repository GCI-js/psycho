import { Gamble } from "../../../../common/type/Gamble";
import { GambleModel } from "../model/GambleModel";

export const GambleController = {
  getNewId: async () => {
    let maxId = Math.max(
      ...(await GambleModel.find().lean()).map((e) => {
        return +e.gambleId;
      })
    );
    console.log(maxId);
    return maxId + 1;
  },
  createGamble: async (newGamble: Gamble) => {
    await GambleModel.create(newGamble);
  },
  findAll: async () => {
    let gambles = await GambleModel.find({}).lean<Gamble>();
    return gambles;
  },
  findOne: async (gambleId: string) => {
    let filter = { gambleId: gambleId };
    return await GambleModel.findOne(filter).lean<Gamble>();
  },
  findOneAndUpdate: async (gambleId: string, update: any) => {
    let filter = { gambleId: gambleId };
    await GambleModel.findOneAndUpdate(filter, update);
    return;
  },
  findOneAndDelete: async (gambleId: string) => {
    let filter = { gambleId: gambleId };
    await GambleModel.findOneAndDelete(filter);
    return;
  },
};
