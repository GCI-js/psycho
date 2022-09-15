import { Document } from "mongoose"

declare interface Newsletter extends Document{
  "newsletter_id": string
  "thumbnail": string // image url
  "title": string
  "hashtags": Hashtag[]
  "url": string // original post url
  "writer": string
}