var nameList = [
  'Tripti', 'Himanshu', 'Yash', 'Harsh', 'Harshal', 'Ayush', 'Nitin', 'Vishal',
  'Aarav', 'Vihaan', 'Vivaan', 'Advik', 'Reyansh', 'Arjun', 'Ishaan', 'Ayaan', 'Shaurya', 'Atharva',
  'Ananya', 'Aadya', 'Saanvi', 'Avni', 'Diya', 'Aaradhya', 'Pari', 'Anika', 'Myra', 'Prisha',
  'Aarush', 'Rudra', 'Veer', 'Kabir', 'Devansh', 'Dhruv', 'Rohan', 'Aryan', 'Krishna', 'Ritvik',
  'Navya', 'Aanya', 'Kiara', 'Siya', 'Anaya', 'Saisha', 'Alisha', 'Kyra', 'Zara', 'Shreya',
  'Riyaan', 'Tanish', 'Abeer', 'Hridaan', 'Samaira', 'Anvi', 'Riva', 'Neha', 'Ishika', 'Sara',
  'Aryan', 'Vivaan', 'Ahaan', 'Armaan', 'Shaurya', 'Aaditya', 'Ayaan', 'Samarth', 'Aarav', 'Vihaan',
  'Aaradhya', 'Anvi', 'Aditi', 'Aarohi', 'Avni', 'Ananya', 'Shanaya', 'Prisha', 'Myra', 'Siya',
  'Reyansh', 'Vivaan', 'Arjun', 'Vihaan', 'Advik', 'Dhruv', 'Ayaan', 'Ishaan', 'Aarav', 'Shaurya',
  'Anika', 'Aaradhya', 'Aadya', 'Pari', 'Diya', 'Kiara', 'Riya', 'Anaya', 'Myra', 'Avni',
  'Kabir', 'Rudra', 'Devansh', 'Aarush', 'Veer', 'Rohan', 'Krishna', 'Aryan', 'Dhruv', 'Ritvik',
  'Navya', 'Aanya', 'Anvi', 'Siya', 'Shreya', 'Saisha', 'Ananya', 'Kyra', 'Zara', 'Alisha',
  'Riyaan', 'Abeer', 'Tanish', 'Samaira', 'Hridaan', 'Anvi', 'Riva', 'Sara', 'Ishika', 'Neha',
  'Aarav', 'Vivaan', 'Vihaan', 'Advik', 'Reyansh', 'Arjun', 'Ishaan', 'Ayaan', 'Shaurya', 'Atharva',
  'Ananya', 'Aadya', 'Saanvi', 'Avni', 'Diya', 'Aaradhya', 'Pari', 'Anika', 'Myra', 'Prisha',
  'Aarush', 'Rudra', 'Veer', 'Kabir', 'Devansh', 'Dhruv', 'Rohan', 'Aryan', 'Krishna', 'Ritvik',
  'Navya', 'Aanya', 'Kiara', 'Siya', 'Anaya', 'Saisha', 'Alisha', 'Kyra', 'Zara', 'Shreya',
  'Riyaan', 'Tanish', 'Abeer', 'Hridaan', 'Samaira', 'Anvi', 'Riva', 'Neha', 'Ishika', 'Sara'
];

export const generateRandomName = () => {
    return nameList[Math.floor(Math.random() * nameList.length)];
};


const projectWords = [
  'video', 'streaming', 'web', 'project', 'React', 'Redux', 'Tailwind',
  'UI', 'UX', 'frontend', 'backend', 'authentication', 'integration', 'component',
  'design', 'development', 'platform', 'deployment', 'solution', 'state', 'management',
  'player', 'media', 'live', 'broadcast', 'interface', 'responsive', 'CSS', 'framework'
];

export const generateRandomMessage = () => {
  const randomWords = [];
  
  
  const numWords = Math.random() < 0.5 ? 2 : 3;
  
  for (let i = 0; i < numWords; i++) {
    const randomIndex = Math.floor(Math.random() * projectWords.length);
    randomWords.push(projectWords[randomIndex]);
  }
  
  return randomWords.join(' ');
}
