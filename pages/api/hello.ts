// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

//https://accounts.spotify.com/authorize?client_id=9de0b6c29387401d9f526a2bb3bd2c89&response_type=code&redirect_uri=http://localhost:3000/callback&scope=user-read-currently-playing+user-top-read
//AQCi8qRxlMUXnDGXIzOd4CmIr7fd8zAtfJNxNoUSPsk-3fe61a2euh6NpX5d_JgXbsipYkrLf1ood-JkObR57gKe-L0iXx4qzq-GwzWZbEJ3AUUIPwCQJGLkZMAH73Nm4bIqvrsuu6_UnmaNAissH0Ylwueoah6GwB0IoL_xJ6IqJ9BeEk7wzmcMgg8BQHQ5CAs68leF210ZQTOTMgIdTDde5vK289QYGUyF6Cc0
//OWRlMGI2YzI5Mzg3NDAxZDlmNTI2YTJiYjNiZDJjODk6MDE5NmI5MTViMThmNGMxZGFkZGZiMjgyYjE4YjYyMzQ=

//http://localhost:3000/callback?code=AQCYXes2FLU6rXNMOaFNJzgWfZNm8N-j7Fj5-Y0gcQCWxaX8Xp316gyliUGN3AfqZux7YX6J3eoD-HKz4NdX46ny5shPJlp4h7VQxcH-8YCs8N-vv8pYYIUVEUuTnEexq5CC9iV2jRqyf-BFrjFIhHdWiOVstEGiGXezCJupxV486S_6ZifRTu3GiVMTvRyFY-gdAKB-K6ZMfG5r0PAi1QOoUdTYo-IXynEhVhH8

curl -H "Authorization: Basic OWRlMGI2YzI5Mzg3NDAxZDlmNTI2YTJiYjNiZDJjODk6MDE5NmI5MTViMThmNGMxZGFkZGZiMjgyYjE4YjYyMzQ="-d grant_type=authorization_code -d code=AQCYXes2FLU6rXNMOaFNJzgWfZNm8N-j7Fj5-Y0gcQCWxaX8Xp316gyliUGN3AfqZux7YX6J3eoD-HKz4NdX46ny5shPJlp4h7VQxcH-8YCs8N-vv8pYYIUVEUuTnEexq5CC9iV2jRqyf-BFrjFIhHdWiOVstEGiGXezCJupxV486S_6ZifRTu3GiVMTvRyFY-gdAKB-K6ZMfG5r0PAi1QOoUdTYo-IXynEhVhH8 -d redirect_uri=http%3A%2F%2Flocalhost:3000/callback https://accounts.spotify.com/api/token
