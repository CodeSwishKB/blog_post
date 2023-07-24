var date = new Date()
var year = date.getFullYear()
document.getElementById("currentYear").innerHTML = year

document.addEventListener("DOMContentLoaded", function () {
  const publishDateElements = document.querySelectorAll(".date")

  function updatePublishDates() {
    publishDateElements.forEach(element => {
      const timestamp = element.getAttribute("data-timestamp")
      const publishDate = new Date(timestamp)
      const currentDate = new Date()

      const timeDifferenceInSeconds = Math.floor(
        (currentDate - publishDate) / 1000
      )

      let timeAgo

      if (timeDifferenceInSeconds < 60) {
        timeAgo = timeDifferenceInSeconds + " seconds ago"
      } else if (timeDifferenceInSeconds < 3600) {
        timeAgo = Math.floor(timeDifferenceInSeconds / 60) + " minutes ago"
      } else if (timeDifferenceInSeconds < 86400) {
        timeAgo = Math.floor(timeDifferenceInSeconds / 3600) + " hours ago"
      } else if (timeDifferenceInSeconds < 2592000) {
        timeAgo = Math.floor(timeDifferenceInSeconds / 86400) + " days ago"
      } else if (timeDifferenceInSeconds < 31536000) {
        timeAgo = Math.floor(timeDifferenceInSeconds / 2592000) + " months ago"
      } else {
        timeAgo = Math.floor(timeDifferenceInSeconds / 31536000) + " years ago"
      }

      element.textContent = timeAgo
    })
  }

  // Update time ago initially
  updatePublishDates()

  // Update time ago every 60 seconds to keep it up-to-date
  setInterval(updatePublishDates, 60000)
})
