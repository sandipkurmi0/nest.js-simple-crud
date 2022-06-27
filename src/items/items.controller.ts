import { Controller , Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto'
import { ItemsService } from './items.service';
import { Item } from './interface/item.interface'

@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService: ItemsService) {}

    // create get decarator
    @Get()
    findAll(): Promise<Item[]> {
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Item>{
       return this.itemsService.findOne(id)
    }


    @Post()
     create(@Body() createItemDto: CreateItemDto): Promise<Item> {
        // console.log(createItemDto)
        return this.itemsService.create(createItemDto);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Item>{
        return this.itemsService.delete(id);
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id):  Promise<Item>{
        return this.itemsService.update(id, updateItemDto);

    }
}
