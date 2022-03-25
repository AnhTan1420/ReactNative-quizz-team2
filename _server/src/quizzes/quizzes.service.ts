import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { Quiz, QuizDocument } from './schemas/quiz.schema';
import { Model } from 'mongoose';

@Injectable()
export class QuizzesService {
  constructor(
    @InjectModel(Quiz.name) private readonly quizModel: Model<QuizDocument>,
  ) {}

  create(createQuizDto: CreateQuizDto): Promise<QuizDocument> {
    return this.quizModel.create(createQuizDto);
  }

  async findAll(): Promise<QuizDocument[]> {
    return this.quizModel.find();
  }

  async findOne(id: string): Promise<QuizDocument> {
    return this.quizModel.findById(id);
  }

  async update(
    id: string,
    updateQuizDto: UpdateQuizDto,
  ): Promise<QuizDocument> {
    return this.quizModel.findByIdAndUpdate(id, updateQuizDto, { new: true });
  }

  async remove(id: string): Promise<QuizDocument> {
    return this.quizModel.findByIdAndDelete(id);
  }
}
