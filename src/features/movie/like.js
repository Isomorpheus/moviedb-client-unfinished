import gql from 'graphql-tag'
import { useMutation } from '@vue/apollo-composable'

export function useToggleLike() {
  const { mutate } = useMutation(gql`
    mutation toggleLike($input: ToggleLikeMovieInput!) {
      toggleLikeMovie(input: $input) {
        id
        likes
        liked
      }
    }
  `)

  async function toggleLike(movieId) {
    await mutate({
      input: {
        movieId,
      },
    })
  }
  return { toggleLike }
}
