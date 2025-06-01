document
  .getElementById("btn_form_send")
  .addEventListener("click", async (e) => {
    e.preventDefault();

    const data = {
      surname: document.getElementById("surname").value,
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      date: document.getElementById("date").value,
      comment: document.getElementById("comment").value,
    };

    try {
      const res = await fetch("/send-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        document.getElementById("notification").innerText = "Заявку надіслано!";
      } else {
        document.getElementById("notification").innerText =
          "Помилка надсилання.";
      }
    } catch (err) {
      document.getElementById("notification").innerText = "Помилка з’єднання.";
      console.error(err);
    }
  });

document
  .querySelector(".feedback__form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      surname: document.getElementById("surname").value,
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      date: document.getElementById("date").value,
      comment: document.getElementById("comment").value,
    };

    try {
      const res = await fetch("/send-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        document.getElementById("notification").innerText = "Заявку надіслано!";
      } else {
        document.getElementById("notification").innerText =
          "Помилка надсилання.";
      }
    } catch (err) {
      document.getElementById("notification").innerText = "Помилка з’єднання.";
    }
  });
