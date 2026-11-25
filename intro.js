export async function handleIntro(request, env, ctx) {
    const html = `
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fortrain | About Us</title>
    <link rel="icon" href="https://i.postimg.cc/wypcmjJx/image.png" type="image/png">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Montserrat', sans-serif;
            background-color: #0b5955;
            background-image: 
                linear-gradient(rgba(11, 89, 85, 0.9), rgba(11, 89, 85, 0.9)),
                url('https://www.vnulib.edu.vn/images/hinh_anh_chung/TVDHBK.jpg?gidzl=FkOG7i5ct1Gv_n4SoNlV6pN-4HNIAjfFBAyIHO0XZ4j_e4b4rII5JoIYJqBQ8OL99lTAGsJ9j_m_nMNS4m&auto=format&fit=crop');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ffffff;
            text-align: center;
        }

        .container {
            padding: 40px 20px;
        }

        h1 {
            font-size: 48px;
            font-weight: 700;
            letter-spacing: 2px;
            margin-bottom: 16px;
        }

        p {
            font-size: 16px;
            opacity: 0.85;
        }

        a {
            color: #81c7bc;
            text-decoration: none;
            font-weight: 600;
        }

        a:hover {
            text-decoration: underline;
        }

        @media (max-width: 600px) {
            h1 {
                font-size: 36px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Hello World</h1>
        <p>Trang giới thiệu Fortrain</p>
        <p style="margin-top: 24px;">
            <a href="/">← Quay lại trang chủ</a>
        </p>
    </div>
</body>
</html>
`;

    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
}
