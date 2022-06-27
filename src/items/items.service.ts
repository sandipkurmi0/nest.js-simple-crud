import { Injectable } from '@nestjs/common';
//it thus allous us to inject as a dependency into a constructor

import { Item } from './interface/item.interface';
import { Model} from 'mongoose';
import { InjectModel} from '@nestjs/mongoose'

@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly itemModel:Model<Item>){}


       async findAll(): Promise<Item[]>{
            return await this.itemModel.find();
        }

       async findOne(id: string): Promise<Item> {
            return await this.itemModel.findOne({_id: id})
        }

        async create(item: Item): Promise<Item> {
            const newItem = new this.itemModel(item);
            return await newItem.save();
        }

        async update (id: string, item: Item): Promise<Item>{
            return await this.itemModel.findByIdAndUpdate(id, item, {
                new: true
            })
        }

        async delete (id: string): Promise<Item> {
            return await this.itemModel.findByIdAndRemove(id)
        }


}
