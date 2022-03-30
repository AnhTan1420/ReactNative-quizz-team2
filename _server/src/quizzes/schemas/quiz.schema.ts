import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuizDocument = Quiz & Document;

@Schema({
  timestamps: true,
  toJSON: {
    transform(doc, ret) {
      ret.id = ret._id.toString();
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
})
export class Quiz {
  @Prop({ required: true, type: String, trim: true })
  title: string;

  @Prop({ type: String, trim: true })
  description: string;
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);
