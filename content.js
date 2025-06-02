function removeRichDevAns() {
  const el = document.getElementById("richdev_ans");
  if (el) {
    const parentLi = el.closest("li");
    if (parentLi) {
      parentLi.remove();
      console.log("Removed parent <li> of #richdev_ans");
    } else {
      el.remove();
      console.log("Removed #richdev_ans directly");
    }
  }
}

function removeCopilotByHeading() {
  const headings = document.querySelectorAll("h2");
  headings.forEach(h2 => {
    if (h2.textContent.trim() === "Copilot Answer") {
      const li = h2.closest("li");
      if (li) {
        li.remove();
        console.log("Removed Copilot Answer <li>");
      }
    }
  });
}

function removeCoPilotSearchButton() {
  const el = document.getElementById("b-scopeListItem-copilotsearch");
  if (el) {
    const parentLi = el.closest("li");
    if (parentLi) {
      parentLi.remove();
      console.log("Removed parent <li> of #b-scopeListItem-copilotsearch");
    } else {
      el.remove();
      console.log("Removed #b-scopeListItem-copilotsearch directly");
    }
  }
}

function removeCoPilotTab() {
  const el = document.getElementById("b-scopeListItem-conv");
  if (el) {
    const parentLi = el.closest("li");
    if (parentLi) {
      parentLi.remove();
      console.log("Removed parent <li> of #b-scopeListItem-conv");
    } else {
      el.remove();
      console.log("Removed #b-scopeListItem-conv directly");
    }
  }
}

function runRemovals() {
  removeRichDevAns();
  removeCopilotByHeading();
  removeCoPilotSearchButton();
  removeCoPilotTab();
}

const observer = new MutationObserver(runRemovals);
observer.observe(document.body, { childList: true, subtree: true });

runRemovals(); // Initial run