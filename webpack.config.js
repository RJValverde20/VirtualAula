module: {
    rules: [
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000, // Puedes ajustar este límite
          name: 'media/[name].[hash:7].[ext]'
        }
      }
    ]
  }
  