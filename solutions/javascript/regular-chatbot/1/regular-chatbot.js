// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  
  const result = /^chatbot/i.test(command)
  return result
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  const re = /emoji\d*\s/gi
  const noEmojiMessage = message.replace(re, " ")
  return noEmojiMessage
  
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  const re = /\W\W\d{2}\W\s\d{3}\W\d{3}\W\d{3}/
  if (re.test(number)){
    return "Thanks! You can now download me to your phone."
  }else{
    return "Oops, it seems like I can't reach out to " + number
  }
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  const re = /\b[a-z]+\.[a-z]{2,6}\b/g;
  return userInput.match(re)
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  const re = /(\w+),\s(\w+)/;
  const newName = fullName.replace(re, "$2 $1");
  return `Nice to meet you, ${newName}`;
}
