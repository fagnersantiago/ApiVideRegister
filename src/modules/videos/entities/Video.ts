import { PrimaryColumn, Column, Entity, CreateDateColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("video")
class Video {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  url_thumbnail: string;

  @Column()
  url_video: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export default Video;
