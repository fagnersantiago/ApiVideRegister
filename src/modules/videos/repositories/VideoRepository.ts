import { EntityRepository, getCustomRepository, Repository } from "typeorm";
import Video from "../entities/Video";

@EntityRepository(Video)
class VideoRepository extends Repository<Video> {
  async findByTitle(title: string) {
    return this.findOne({ title });
  }

  async list(): Promise<Video[]> {
    return this.find();
  }
}

export default VideoRepository;
