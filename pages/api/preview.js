// export default async function preview(req, res) {
//   const { slug = "" } = req.query;

//   const params = req.url.split("?")

//   if (req.query.secret !== "ZscLgizcb3ryzjxfYOPiuwtt") {
//     return res.status(401).json({ message: 'Invalid token' })
//   }

//   res.setPreviewData({});

//   const cookies = res.getHeader("Set-Cookie");
//   res.setHeader("Set-Cookie", cookies.map((cookie) => cookie.replace("SameSite=Lax", "Samesite=None;Secure")))

//   res.redirect(`/${slug}?${params[1]}`);
// }

export default function handler(req, res) {
  const { slug = '' } = req.query;

  const params = req.url.split('?');

  if ( req.query.secret !== 'MY_SECRET_TOKEN' ) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  res.setPreviewData({});

  const cookies = res.getHeader('Set-Cookie');

  res.setHeader("Set-Cookie", cookies.map((cookie) => cookie.replace("SameSite=Lax", "Samesite=None;Secure")))

  res.redirect(`/${slug}?${params[1]}`)
}