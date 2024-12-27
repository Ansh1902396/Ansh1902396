document.addEventListener('DOMContentLoaded', (event) => {
  const commandInput = document.getElementById('command-input');
  const terminalOutput = document.getElementById('terminal-output');

  commandInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      const command = this.value;
      terminalOutput.innerHTML += `<div><span class="prompt">visitor@RudranshOS:~$</span> ${command}</div>`;
      
      // Add your command logic here
      if (command.toLowerCase() === 'help') {
        terminalOutput.innerHTML += `
          <div>Available commands:</div>
          <div>- help: Display this help message</div>
          <div>- about: Display information about Rudransh</div>
          <div>- skills: List Rudransh's skills</div>
          <div>- contact: Show contact information</div>
          <div>- achievements: Display unlocked achievements</div>
          <div>- level: Show current level and XP</div>
          <div>- quest: Display current quest</div>
          <div>- clear: Clear the terminal</div>
        `;
      } else if (command.toLowerCase() === 'about') {
        terminalOutput.innerHTML += `
          <div>Rudransh Shinghal is a 20-year-old tech enthusiast passionate about open source and development.</div>
          <div>From DevOps to Blockchain, he loves diving into new challenges and crafting innovative solutions.</div>
        `;
      } else if (command.toLowerCase() === 'skills') {
        terminalOutput.innerHTML += `
          <div>Rudransh's skills include:</div>
          <div>- Languages: Rust, C, Go, Solidity, TypeScript, JavaScript</div>
          <div>- Tools: Git, Docker, Vim, Notion, Bun</div>
          <div>- Web Technologies: Next.js, React, WebAssembly</div>
        `;
      } else if (command.toLowerCase() === 'contact') {
        terminalOutput.innerHTML += `
          <div>Contact Rudransh:</div>
          <div>- Email: rudransh9shinghal@gmail.com</div>
          <div>- LinkedIn: https://www.linkedin.com/in/rudransh-shinghal-264b37206/</div>
          <div>- Twitter: https://twitter.com/rudransh190204</div>
          <div>- GitHub: https://github.com/Ansh1902396</div>
        `;
      } else if (command.toLowerCase() === 'clear') {
        terminalOutput.innerHTML = '';
      } else {
        terminalOutput.innerHTML += `<div>Command not found: ${command}</div>`;
      }

      this.value = '';
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
  });
});

