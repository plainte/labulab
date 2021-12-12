function addListElems(ul, list) {
  list.forEach(item => ul.append(`<li>${item}</li>`));
}

function addInfo(json) {
  let ul = $("#info ul");
  addListElems(ul, json.info.list);
  if (json.info.plus) {
    let p = document.createElement('p');
    p.innerHTML = json.info.plus;
    ul.after(p);
  }
  $('#process-intro').text(json.processIntro);
}

function addProcess(process) {
  let queryId = "#process-begin";
  //render process cards w vertical lines
  const keys = Object.keys(process);
  const lastKey = keys[keys.length-1];
  const firstKey = keys[0];
  for (const [phase, sections] of Object.entries(process)) {
    let div = document.createElement('div');
    div.id = phase;
    div.classList.add('i-column');

    let innerDiv = document.createElement('div');
    innerDiv.classList.add('i-card-basic');

    let headerDiv = document.createElement('div');
    headerDiv.classList.add('i-column-header');
    headerDiv.classList.add('text-center');
    let h5 = document.createElement('h5');
    h5.innerHTML = sections.header;
    h5.style.color = '#2B3990'; //blue
    headerDiv.appendChild(h5);

    let contentDiv = document.createElement('div');
    contentDiv.classList.add('i-content');
    let ul = document.createElement('ul');
    sections.list.forEach(e => {
      let li = document.createElement('li');
      li.innerHTML = e;
      ul.appendChild(li);
    })
    contentDiv.appendChild(ul);

    innerDiv.appendChild(headerDiv);
    innerDiv.appendChild(contentDiv);

    div.appendChild(innerDiv);

    if (phase != lastKey) {
      let vl = document.createElement('div');
      vl.classList.add('vl');

      if (phase == firstKey) {
        $(queryId).after(div, [vl]);
      } else {
        $(queryId).next().after(div, [vl]);
      }
    } else {
      $(queryId).next().after(div);
    }
    queryId = "#" + div.id;
  }
}

function addExtraDetails(extraDetails) {
  $('#extra-details h4').text(extraDetails.header);
  let ul = $('#extra-details ul');
  addListElems(ul, extraDetails.list);
}

function addQuotes(qs) {
  const quotes = $('.i-credit-column').toArray();
  quotes.forEach((e, i) => {
    e.innerHTML = qs[i];
  })

}

document.addEventListener("DOMContentLoaded", () => {
  $('#intro').html(json.intro);
  addInfo(json);
  addProcess(json.process);
  addExtraDetails(json.extraDetails);
  addQuotes(json.quotes);
  
});