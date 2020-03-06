import { ref, computed } from '@vue/composition-api'

function getSearchRegExp(text) {
  return new RegExp(text.trim().replace(/\s+/g, '|'), 'i')
}

export function useSearch(items) {

  const searchText = ref('')
  const filteredItems = computed(() => {
    const regTest = getSearchRegExp(searchText.value)
    return items.value.filter(item => regTest.test(item.name))
  })

  return {
    searchText,
    filteredItems,
  }
}
