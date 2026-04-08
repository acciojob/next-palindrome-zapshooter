function nextPalindrome(num) {
  num = Number(num);
  let candidate = num + 1;

  while (!isPalindrome(candidate)) {
    candidate++;
  }

  return candidate;
}

function isPalindrome(n) {
  const s = String(n);
  return s === s.split('').reverse().join('');
}

const input = prompt("Enter a number");
alert(nextPalindrome(input));
