
function callback(el) {
  if (window.calculateTimeout) {
    clearTimeout(window.calculateTimeout);
  }
  let labelGroups = body.querySelectorAll(`[name="${el.getAttribute('name')}"]`);
  Array.from(labelGroups).forEach(el => {
    el.className = "md:text-4xl text-xl bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded";
  });
  el.className = "md:text-4xl text-xl bg-blue-500 font-semibold text-white py-2 px-4 border border-blue-500 rounded";
  window.calculateTimeout = setTimeout(() => { calculate(); }, 300);
}

function calculate() {
  const MAPPING = {
    "0011": "211",
    "0101": "121",
    "0110": "112",
    "1011": "022",
    "1012": "031",
    "1021": "013",
    "1101": "202",
    "1102": "301",
    "1110": "220",
    "1120": "310",
    "1201": "103",
    "1210": "130",
    "2112": "004",
    "2121": "040",
    "2211": "400",
  };

  let emptyValue = body.querySelector('input[name="empty"]:checked')?.value;
  let leftValue = body.querySelector('input[name="left"]:checked')?.value;
  let centerValue = body.querySelector('input[name="center"]:checked')?.value;
  let rightValue = body.querySelector('input[name="right"]:checked')?.value;

  let group = [emptyValue, leftValue, centerValue, rightValue];
  if (group.filter(data => data === undefined).length > 0) return;

  let result = MAPPING[group.join('')];
  output.innerText = result ?? "此組合不存在，請重新確認。";
}
