window.addEventListener("load", solve);

function solve() {
    let nameFieldRef = document.getElementById('name')
    let phonenumberFieldRef = document.getElementById('phone')
    let categoryFieldRef = document.getElementById('category')

    let addBtn = document.getElementById('add-btn')

    let checkListRef= document.getElementById('check-list')

    let contactListRef = document.getElementById('contact-list')

    addBtn.addEventListener('click', addBtnClicked)

    function addBtnClicked(){
      if (nameFieldRef.value !=='' && phonenumberFieldRef.value !== '' && categoryFieldRef.value !==''){

        let currentName = nameFieldRef.value
        let currentPhonenumber = phonenumberFieldRef.value
        let currentCategory = categoryFieldRef.value

        let newLi = document.createElement('li')
        let newArticle = document.createElement('article')

        let newName= document.createElement('p')
        newName.textContent = `name:${nameFieldRef.value}`

        let newPhonenumber= document.createElement('p')
        newPhonenumber.textContent = `phone:${phonenumberFieldRef.value}`

        let newCategory= document.createElement('p')
        newCategory.textContent = `category:${categoryFieldRef.value}`

        let newDivBtns = document.createElement('div')
        newDivBtns.className = 'buttons'

        let editBtn = document.createElement('button')
        let saveBtn = document.createElement('button')

        editBtn.className = 'edit-btn'
        saveBtn.className = 'save-btn'

        newArticle.appendChild(newName)
        newArticle.appendChild(newPhonenumber)
        newArticle.appendChild(newCategory)

        newDivBtns.appendChild(editBtn)
        newDivBtns.appendChild(saveBtn)

        newLi.appendChild(newArticle)
        newLi.appendChild(newDivBtns)

        checkListRef.appendChild(newLi)

        nameFieldRef.value = ''
        phonenumberFieldRef.value =''
        categoryFieldRef.value =''

        editBtn.addEventListener('click', editBtnClicked)
        saveBtn.addEventListener('click', saveBtnClicked)

        function editBtnClicked(){
          nameFieldRef.value = currentName
          phonenumberFieldRef.value = currentPhonenumber
          categoryFieldRef.value = currentCategory
          newLi.remove()
        }

        function saveBtnClicked(){
          newLi.removeChild(newDivBtns)
          checkListRef.removeChild(newLi)

          let deleteBtn = document.createElement('button')
          deleteBtn.className = 'del-btn'

          newLi.appendChild(deleteBtn)

          contactListRef.appendChild(newLi)

          

          

          deleteBtn.addEventListener('click', deleteBtnClicked)

          function deleteBtnClicked(e){
            let btnTarget = e.currentTarget
            let liTarget = btnTarget.parentNode.parentNode
            liTarget.remove()
          }

        }

      }
    }
  }
  