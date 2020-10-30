(function () {
  "use strict";

  const chatDialog = document.getElementById("chat-2-desk-dialog");

  // if there is no chat dialog, there is nothing to do
  if (!chatDialog) {
    return;
  }

  const closeDialogButton = document.getElementById("close-dialog");
  const emojiPickerButton = document.getElementById("emoji-picker");
  const fileUploadButton = document.getElementById("file-upload");
  const showDialogButton = document.getElementById("show-dialog");

  /**
   * Toggles the visible state of the chat dialog and the
   * show dialog icon.
   */
  function toggleState() {
    chatDialog.classList.toggle("hidden");
    showDialogButton.classList.toggle("hidden");
  }

  if (showDialogButton) {
    showDialogButton.addEventListener("click", function () {
      toggleState();
    });
  }

  if (closeDialogButton) {
    closeDialogButton.addEventListener("click", function () {
      toggleState();
    });
  }

  if (fileUploadButton) {
    const fileField = document.getElementById("file-field");

    fileUploadButton.addEventListener("click", function () {
      fileField.click();
    });

    fileField.addEventListener("change", function (event) {
      // fake path, but real filename
      console.info(event.target.value);
    });
  }

  if (emojiPickerButton) {
    new FgEmojiPicker({
      trigger: "#emoji-picker",
      container: ".chat-2-desk-popup-container",
      dir: "./js/libs/",
      emit(obj) {
        const emoji = obj.emoji;
        document.querySelector("#message-input-lch").value += emoji;
      },
    });
  }
})();
