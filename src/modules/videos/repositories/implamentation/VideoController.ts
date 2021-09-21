import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import VideoRepository from "../VideoRepository";
import AppError from "../../../../shared/Errors/AppError";

class VideoController {
  async store(request: Request, response: Response) {
    const { title, description, url_thumbnail, url_video } = request.body;

    const videoRepository = getCustomRepository(VideoRepository);
    const videoExists = await videoRepository.findByTitle(title);

    if (videoExists) {
      throw new AppError("video already exists");
    }

    const videoCreate = videoRepository.create({
      title,
      description,
      url_thumbnail,
      url_video,
    });

    await videoRepository.save(videoCreate);

    return response.status(200).json(videoCreate);
  }

  async show(request: Request, response: Response) {
    const allVideo = getCustomRepository(VideoRepository);
    const listVideo = await allVideo.find();
    return response.status(200).json(listVideo);
  }
}

export default VideoController;
