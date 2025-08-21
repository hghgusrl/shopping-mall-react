const reportData = [
  { id: 1, name: "Amazon", features: "Fast shipping, wide selection", link: "https://www.amazon.com" },
  { id: 2, name: "Coupang", features: "Rocket delivery, easy returns", link: "https://www.coupang.com" },
  { id: 3, name: "eBay", features: "Auction and marketplace model", link: "https://www.ebay.com" }
];

function ReportPage({ onBack }) {
  return (
    <div className="report-page">
      <button onClick={onBack}>뒤로가기</button>
      <h2>쇼핑몰 벤치마킹 보고서</h2>
      <table>
        <thead>
          <tr>
            <th>쇼핑몰</th>
            <th>특징</th>
            <th>링크</th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((mall) => (
            <tr key={mall.id}>
              <td>{mall.name}</td>
              <td>{mall.features}</td>
              <td>
                <a href={mall.link} target="_blank" rel="noopener noreferrer">
                  바로가기
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

window.ReportPage = ReportPage;
