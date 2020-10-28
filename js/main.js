(function () {
  "use strict";

  const chatDialog = document.getElementById("chat-2-desk-dialog");

  // if there is no chat dialog, there is nothing to do
  if (!chatDialog) {
    return;
  }

  const closeDialogButton = document.getElementById("close-dialog");
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
})();
