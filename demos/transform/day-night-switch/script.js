const SELECT = "active";
      const layer_four = document.querySelectorAll(".layer_four")[0];
      const layer_three = document.querySelectorAll(".layer_three")[0];
      const layer_two = document.querySelectorAll(".layer_two")[0];
      const layer_one = document.querySelectorAll(".layer_one")[0];
      const switch_container =
        document.querySelectorAll(".switch_container")[0];
      const astronomical_container = document.querySelectorAll(
        ".astronomical_container"
      )[0];
      const star_container = document.querySelectorAll(".star_container")[0];
      const sun = document.querySelectorAll(".astronomical_container .sun")[0];
      const holes = document.querySelectorAll(".hole");
      const holeList = [
        { left: "15px", top: "20px", size: "25px" },
        { left: "30px", top: "40px", size: "20px" },
        { left: "60px", top: "-30px", size: "50px" },
      ];
      for (let index = 0; index < holes.length; index++) {
        const _hole = holes[index];
        const style = holeList[index];
        _hole.style.top = style.top;
        _hole.style.left = style.left;
        _hole.style.width = style.size;
        _hole.style.height = style.size;
      }
      const cloudList = [
        { index: 10, bottom: "-60px", left: "20px", size: "100px" },
        { index: 9, bottom: "-60px", left: "100px", size: "80px" },
        { index: 8, bottom: "-100px", left: "140px", size: "120px" },
        { index: 7, bottom: "-60px", left: "180px", size: "100px" },
        { index: 6, bottom: "-50px", left: "240px", size: "120px" },
        { index: 5, bottom: "-60px", left: "20px", size: "120px" },
        { index: 4, bottom: "-20px", left: "100px", size: "80px" },
        { index: 3, bottom: "-80px", left: "140px", size: "120px" },
        { index: 2, bottom: "-40px", left: "200px", size: "120px" },
        { index: 1, bottom: "-20px", left: "240px", size: "120px" },
      ];
      const clouds = document.querySelectorAll(".cloud");
      for (let index = 0; index < clouds.length; index++) {
        const _cloud = clouds[index];
        const style = cloudList[index];
        _cloud.style.zIndex = style.index;
        _cloud.style.bottom = style.bottom;
        _cloud.style.left = style.left;
        _cloud.style.width = style.size;
        _cloud.style.height = style.size;
      }
      const starList = [
        {
          left: "50px",
          top: "20px",
          scale: 1,
        },
        {
          left: "60px",
          top: "40px",
          scale: 1.1,
        },
        {
          left: "100px",
          top: "20px",
          scale: 1.2,
        },
        {
          left: "160px",
          top: "40px",
          scale: 1,
        },
      ];
      const stars = document.querySelectorAll(".star");
      for (let index = 0; index < stars.length; index++) {
        const _star = stars[index];
        const style = starList[index];
        _star.style.left = style.left;
        _star.style.top = style.top;
        _star.style.scale = style.scale;
      }
      switch_container.addEventListener("click", () => {
        switch_container.classList.toggle(SELECT);
        astronomical_container.classList.toggle(SELECT);
        sun.classList.toggle(SELECT);
        holes.forEach((hole) => {
          hole.classList.toggle(SELECT);
        });
        clouds.forEach((cloud) => {
          cloud.classList.toggle(SELECT);
        });
        star_container.classList.toggle(SELECT)
        layer_four.classList.toggle(SELECT)
        layer_three.classList.toggle(SELECT)
        layer_two.classList.toggle(SELECT)
        layer_one.classList.toggle(SELECT)
      });