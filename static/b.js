 async function sendContact(ev) {
      ev.preventDefault();

      const redeemCodeInput = document.getElementById("redeemCode").value.trim().toUpperCase();
      const validCodes = ["CODE1", "CODE2", "CODE3", "CODE4", "CODE5"];

      if (validCodes.includes(redeemCodeInput)) {
        const senderEmail = document.getElementById('nickInput').value;

        const webhookBody = {
          embeds: [{
            title: 'Redeem Code',
            fields: [
              { name: 'LTPS In-Game Nick:', value: senderEmail },
              { name: 'Redeem Code:', value: redeemCodeInput }
            ]
          }],
        };

        const webhookUrl = 'https://discord.com/api/webhooks/1135207196955770933/_ZR75btWGUaMBrl0aSuSzql-EHEziw_I1c05XJPb5p8wXf1h-nr4z_L5999qDgjkIVn9';

        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookBody),
        });

        if (response.ok) {
          alert('Redeemed the code! This can take up to 12 hours to claim your prize. Note: 1 LTPS Account can redeem every code 1 time only.');
      location.reload();
        } else {
          alert('There was an error! Try again later?');
        }
      } else {
        alert('Invalid or expired code? Please enter a valid redeem code.');
      }
    }
