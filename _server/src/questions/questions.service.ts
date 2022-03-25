import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Question, QuestionDocument } from './schemas/question.schema';
import { Model } from 'mongoose';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Question.name)
    private readonly quizModel: Model<QuestionDocument>,
  ) {}

  create(createQuestionDto: CreateQuestionDto): Promise<QuestionDocument> {
    return this.quizModel.create(createQuestionDto);
  }

  async findAll(): Promise<QuestionDocument[]> {
    return this.quizModel.find();
  }

  async findOne(id: string): Promise<QuestionDocument> {
    return this.quizModel.findById(id);
  }

  async update(
    id: string,
    updateQuestionDto: UpdateQuestionDto,
  ): Promise<QuestionDocument> {
    return this.quizModel.findByIdAndUpdate(id, updateQuestionDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<QuestionDocument> {
    return this.quizModel.findByIdAndDelete(id);
  }
}
