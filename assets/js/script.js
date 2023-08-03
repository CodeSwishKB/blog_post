var date = new Date()
var year = date.getFullYear()
document.getElementById("currentYear").innerHTML = year

// greeting
var greet = document.getElementById("greetings")
var hourNow = date.getHours()

if (hourNow > 18) {
  greet.innerText = `Good Evening!`
} else if (hourNow > 10) {
  greet.innerText = `Good Afternoon!`
} else if (hourNow > 0) {
  greet.innerText = `Good Morning!`
} else {
  greet.innerText = `Hello`
}

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
        timeAgo =
          timeDifferenceInSeconds === 1
            ? "second ago"
            : timeDifferenceInSeconds + "1 seconds ago"
      } else if (timeDifferenceInSeconds < 3600) {
        const mins = Math.floor(timeDifferenceInSeconds / 60)
        timeAgo = mins === 1 ? "1 minute ago" : mins + " minutes ago"
      } else if (timeDifferenceInSeconds < 86400) {
        const hours = Math.floor(timeDifferenceInSeconds / 3600)
        timeAgo = hours === 1 ? "1 hour ago" : hours + " hours ago"
      } else if (timeDifferenceInSeconds < 604800) {
        const days = Math.floor(timeDifferenceInSeconds / 86400)
        timeAgo = days === 1 ? "1 day ago" : days + " days ago"
      } else if (timeDifferenceInSeconds < 2592000) {
        const weeks = Math.floor(timeDifferenceInSeconds / 604800)
        timeAgo = weeks === 1 ? "1 week ago" : weeks + " weeks ago"
      } else if (timeDifferenceInSeconds < 31536000) {
        const months = Math.floor(timeDifferenceInSeconds / 2592000)
        timeAgo = months === 1 ? "1 month ago" : months + " months ago"
      } else {
        const years = Math.floor(timeDifferenceInSeconds / 31536000)
        timeAgo = years === 1 ? "1 year ago" : years + " years ago"
      }

      element.textContent = timeAgo
    })
  }

  // Update time ago initially
  updatePublishDates()

  // Update time ago every 60 seconds to keep it up-to-date
  setInterval(updatePublishDates, 60000)
})
