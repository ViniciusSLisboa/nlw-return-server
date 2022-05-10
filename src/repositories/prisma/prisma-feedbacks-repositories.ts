import { prisma } from "../../prisma";
import {
  FeedbacksCreateProps,
  FeedbacksRepository,
} from "../feedbacks-repositories";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbacksCreateProps) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
