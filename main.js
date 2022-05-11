let space = document.getElementById("space")
space.style = "background:#0A1931;"
space.width = window.innerWidth - 4;
space.height = window.innerHeight - 4;
let ctx = space.getContext('2d')

let ball = {
  b1: {
    x: space.width / 2,
    y: space.height / 2,
    v_x: 8,
    v_y: 8
  },
  b2: {
    x: (space.width / 2) - 150,
    y: (space.height / 2),
    v_x: 10,
    v_y: 10
  },
  b3: {
    x: (space.width / 2) + 150,
    y: (space.height / 2),
    v_x: 12,
    v_y: 12
  },
  b4: {
    x: (space.width / 2) + 280,
    y: (space.height / 2),
    v_x: 14,
    v_y: 14
  },
  b5: {
    x: (space.width / 2) - 280,
    y: (space.height / 2),
    v_x: 16,
    v_y: 16
  }
}

var w = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function Draw() {
  ctx.clearRect(0, 0, space.width, space.height)

  ctx.strokeStyle = "yellow"
  ctx.fillStyle = "yellow"
  ctx.beginPath()
  ctx.arc(ball.b1.x, ball.b1.y, 50, 0, Math.PI * 2, false)
  ctx.fill()
  ctx.stroke()

  ctx.strokeStyle = "red"
  ctx.fillStyle = "red"
  ctx.beginPath()
  ctx.arc(ball.b2.x, ball.b2.y, 50, 0, Math.PI * 2, false)
  ctx.fill()
  ctx.stroke()

  ctx.strokeStyle = "orange"
  ctx.fillStyle = "orange"
  ctx.beginPath()
  ctx.arc(ball.b3.x, ball.b3.y, 50, 0, Math.PI * 2, false)
  ctx.fill()
  ctx.stroke()

  ctx.strokeStyle = "blue"
  ctx.fillStyle = "blue"
  ctx.beginPath()
  ctx.arc(ball.b4.x, ball.b4.y, 50, 0, Math.PI * 2, false)
  ctx.fill()
  ctx.stroke()

  ctx.strokeStyle = "green"
  ctx.fillStyle = "green"
  ctx.beginPath()
  ctx.arc(ball.b5.x, ball.b5.y, 50, 0, Math.PI * 2, false)
  ctx.fill()
  ctx.stroke()
}

function Distance(body1, body2) { return Math.sqrt(Math.pow(body1.x - body2.x, 2) + Math.pow(body1.y - body2.y, 2)) }


setInterval(() => {
  Draw()

  ball.b1.x += ball.b1.v_x;
  ball.b1.y += ball.b1.v_y;
  if (ball.b1.x >= (space.width - 50) || ball.b1.x <= 50) {
    if (w[0] < 2) {
      w[0] += 1;
      if (w[0] < 2) {
        ball.b1.v_x = -ball.b1.v_x;
      }
    }
  }
  else {
    w[0] = 0;
  }
  if (ball.b1.y >= (space.height - 50) || ball.b1.y <= 50) {
    if (w[1] < 2) {
      w[1] += 1;
      if (w[1] < 2) {
        ball.b1.v_y = -ball.b1.v_y;
      }
    }
  }
  else {
    w[1] = 0;
  }

  ball.b2.x += ball.b2.v_x;
  ball.b2.y += ball.b2.v_y;
  if (ball.b2.x >= (space.width - 50) || ball.b2.x <= 50) {
    if (w[2] < 2) {
      w[2] += 1;
      if (w[2] < 2) {
        ball.b2.v_x = -ball.b2.v_x;
      }
    }
  }
  else {
    w[2] = 0;
  }
  if (ball.b2.y >= (space.height - 50) || ball.b2.y <= 50) {
    if (w[3] < 2) {
      w[3] += 1;
      if (w[3] < 2) {
        ball.b2.v_y = -ball.b2.v_y;
      }
    }
  }
  else {
    w[3] = 0;
  }

  ball.b3.x += ball.b3.v_x;
  ball.b3.y += ball.b3.v_y;
  if (ball.b3.x >= (space.width - 50) || ball.b3.x <= 50) {
    if (w[4] < 2) {
      w[4] += 1;
      if (w[4] < 2) {
        ball.b3.v_x = -ball.b3.v_x;
      }
    }
  }
  else {
    w[4] = 0;
  }
  if (ball.b3.y >= (space.height - 50) || ball.b3.y <= 50) {
    if (w[5] < 2) {
      w[5] += 1;
      if (w[5] < 2) {
        ball.b3.v_y = -ball.b3.v_y;
      }
    }
  }
  else {
    w[5] = 0;
  }

  ball.b4.x += ball.b4.v_x;
  ball.b4.y += ball.b4.v_y;
  if (ball.b4.x >= (space.width - 50) || ball.b4.x <= 50) {
    if (w[6] < 2) {
      w[6] += 1;
      if (w[6] < 2) {
        ball.b4.v_x = -ball.b4.v_x;
      }
    }
  }
  else {
    w[6] = 0;
  }
  if (ball.b4.y >= (space.height - 50) || ball.b4.y <= 50) {
    if (w[7] < 2) {
      w[7] += 1;
      if (w[7] < 2) {
        ball.b4.v_y = -ball.b4.v_y;
      }
    }
  }
  else {
    w[7] = 0;
  }

  ball.b5.x += ball.b5.v_x;
  ball.b5.y += ball.b5.v_y;
  if (ball.b5.x >= (space.width - 50) || ball.b5.x <= 50) {
    if (w[8] < 2) {
      w[8] += 1;
      if (w[8] < 2) {
        ball.b5.v_x = -ball.b5.v_x;
      }
    }
  }
  else {
    w[8] = 0;
  }
  if (ball.b5.y >= (space.height - 50) || ball.b5.y <= 50) {
    if (w[9] < 2) {
      w[9] += 1;
      if (w[9] < 2) {
        ball.b5.v_y = -ball.b5.v_y;
      }
    }
  }
  else {
    w[9] = 0;
  }

  if (Distance(ball.b1, ball.b2) <= 110) {
    var a, d;
    if (w[18] < 2) {
      w[18] += 1;
      if (w[18] < 2) {
        a = ball.b1.v_x;
        ball.b1.v_x = ball.b2.v_x;
        ball.b2.v_x = a;

        d = ball.b1.v_y;
        ball.b1.v_y = ball.b2.v_y;
        ball.b2.v_y = d;
      }
    }
  }
  else {
    w[18] = 0;
  }

  if (Distance(ball.b1, ball.b3) <= 110) {
    var e, f;
    if (w[10] < 2) {
      w[10] += 1;
      if (w[10] < 2) {
        e = ball.b1.v_x;
        ball.b1.v_x = ball.b3.v_x;
        ball.b3.v_x = e;

        f = ball.b1.v_y;
        ball.b1.v_y = ball.b3.v_y;
        ball.b2.v_y = f;
      }
    }
  }
  else {
    w[10] = 0;
  }

  if (Distance(ball.b1, ball.b4) <= 110) {
    var g, h;
    if (w[19] < 2) {
      w[19] += 1;
      if (w[19] < 2) {
        g = ball.b1.v_x;
        ball.b1.v_x = ball.b4.v_x;
        ball.b4.v_x = g;

        h = ball.b1.v_y;
        ball.b1.v_y = ball.b4.v_y;
        ball.b4.v_y = h;
      }
    }
  }
  else {
    w[19] = 0;
  }

  if (Distance(ball.b1, ball.b5) <= 110) {
    var i, j;
    if (w[11] < 2) {
      w[11] += 1;
      if (w[11] < 2) {
        i = ball.b1.v_x;
        ball.b1.v_x = ball.b5.v_x;
        ball.b5.v_x = i;

        j = ball.b1.v_y;
        ball.b1.v_y = ball.b5.v_y;
        ball.b5.v_y = j;
      }
    }
  }
  else {
    w[11] = 0;
  }

  if (Distance(ball.b2, ball.b3) <= 110) {
    var k, l;
    if (w[12] < 2) {
      w[12] += 1;
      if (w[12] < 2) {
        k = ball.b2.v_x;
        ball.b2.v_x = ball.b3.v_x;
        ball.b3.v_x = k;

        l = ball.b2.v_y;
        ball.b2.v_y = ball.b3.v_y;
        ball.b3.v_y = l;
      }
    }
  }
  else {
    w[12] = 0;
  }

  if (Distance(ball.b2, ball.b4) <= 110) {
    var m, n;
    if (w[13] < 2) {
      w[13] += 1;
      if (w[13] < 2) {
        m = ball.b2.v_x;
        ball.b2.v_x = ball.b4.v_x;
        ball.b4.v_x = m;

        n = ball.b2.v_y;
        ball.b2.v_y = ball.b4.v_y;
        ball.b4.v_y = n;
      }
    }
  }
  else {
    w[13] = 0;
  }

  if (Distance(ball.b2, ball.b5) <= 110) {
    var o, p;
    if (w[14] < 2) {
      w[14] += 1;
      if (w[14] < 2) {
        a = ball.b2.v_x;
        ball.b2.v_x = ball.b5.v_x;
        ball.b5.v_x = a;

        d = ball.b2.v_y;
        ball.b2.v_y = ball.b5.v_y;
        ball.b5.v_y = d;
      }
    }
  }
  else {
    w[14] = 0;
  }

  if (Distance(ball.b3, ball.b4) <= 110) {
    var q, r;
    if (w[15] < 2) {
      w[15] += 1;
      if (w[15] < 2) {
        a = ball.b3.v_x;
        ball.b3.v_x = ball.b4.v_x;
        ball.b4.v_x = a;

        d = ball.b3.v_y;
        ball.b3.v_y = ball.b4.v_y;
        ball.b4.v_y = d;
      }
    }
  }
  else {
    w[15] = 0;
  }

  if (Distance(ball.b3, ball.b5) <= 110) {
    var s, t;
    if (w[16] < 2) {
      w[16] += 1;
      if (w[16] < 2) {
        s = ball.b3.v_x;
        ball.b3.v_x = ball.b5.v_x;
        ball.b5.v_x = s;

        t = ball.b3.v_y;
        ball.b3.v_y = ball.b5.v_y;
        ball.b5.v_y = t;
      }
    }
  }
  else {
    w[16] = 0;
  }

  if (Distance(ball.b4, ball.b5) <= 110) {
    var u, v;
    if (w[17] < 2) {
      w[17] += 1;
      if (w[17] < 2) {
        u = ball.b4.v_x;
        ball.b4.v_x = ball.b5.v_x;
        ball.b5.v_x = u;

        v = ball.b4.v_y;
        ball.b4.v_y = ball.b5.v_y;
        ball.b5.v_y = v;
      }
    }
  }
  else {
    w[17] = 0;
  }

}, 17);
e