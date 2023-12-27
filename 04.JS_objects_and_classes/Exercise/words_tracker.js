function words_tracker(input){
    let searched_words_list = input.shift().split(" ")
    let occurences = {}
    for (let searched_word of searched_words_list){
      occurences[searched_word] = 0
      for (let w of input){
        if (w === searched_word) {
          occurences[searched_word] += 1
        }
      }
    }
    sorted_list = Object.entries(occurences)
    sorted_list.sort((a,b) => b[1] - a[1])
    for ([key, value] of sorted_list){
      console.log(`${key} - ${value}`)
    }
  }
  
  words_tracker([
  'sentence this', 
  'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
  ]
  )
  