import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  // Req, Res
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './interfaces/item.interface';
import { ItemsService } from './items.service';
// import { Request, Response } from 'express';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  //   findAll(@Req() req: Request, @Res() res: Response): Response {
  async findAll(): Promise<Item[]> {
    // console.log(req.url);
    // return res.send('hello world');
    // return 'Get all items';
    return this.itemsService.findAll();
  }

  @Get(':id')
  //   findOne(@Param() param): string {
  //     return `Item ${param.id}`;
  //   }
  async findOne(@Param('id') id: string): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Post()
  async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Item> {
    return this.itemsService.delete(id);
  }

  @Put(':id')
  update(
    @Body() updateItemDto: CreateItemDto,
    @Param('id') id: string,
  ): Promise<Item> {
    return this.itemsService.update(id, updateItemDto);
  }
}
