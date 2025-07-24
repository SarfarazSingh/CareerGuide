import { type NextRequest, NextResponse } from "next/server"
import puppeteer from "puppeteer"
import type { Company } from "../../../../types"

export async function POST(request: NextRequest) {
  try {
    const { companies }: { companies: Company[] } = await request.json()

    if (!companies || companies.length === 0) {
      return NextResponse.json({ error: "No companies provided" }, { status: 400 })
    }

    // Generate HTML content
    const htmlContent = generateHTMLContent(companies)

    // Launch Puppeteer
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    })

    const page = await browser.newPage()
    await page.setContent(htmlContent, { waitUntil: "networkidle0" })

    // Generate PDF
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        top: "20mm",
        right: "20mm",
        bottom: "20mm",
        left: "20mm",
      },
    })

    await browser.close()

    // Return PDF as response
    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="shortlisted-companies.pdf"',
      },
    })
  } catch (error) {
    console.error("Error generating PDF:", error)
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 })
  }
}

function generateHTMLContent(companies: Company[]): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Shortlisted Companies</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          text-align: center;
          margin-bottom: 40px;
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: 20px;
        }
        .company {
          margin-bottom: 30px;
          padding: 20px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          page-break-inside: avoid;
        }
        .company-name {
          font-size: 24px;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 8px;
        }
        .company-meta {
          display: flex;
          gap: 15px;
          margin-bottom: 15px;
          flex-wrap: wrap;
        }
        .badge {
          background: #f3f4f6;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 500;
        }
        .badge.veteran { background: #dcfce7; color: #166534; }
        .badge.remote { background: #dbeafe; color: #1e40af; }
        .badge.clearance { background: #fed7aa; color: #9a3412; }
        .description {
          margin-bottom: 15px;
          color: #6b7280;
        }
        .section {
          margin-bottom: 15px;
        }
        .section-title {
          font-weight: 600;
          margin-bottom: 5px;
          color: #374151;
        }
        .list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .list-item {
          background: #f9fafb;
          padding: 2px 6px;
          border-radius: 3px;
          font-size: 12px;
        }
        .website {
          color: #2563eb;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Shortlisted Companies</h1>
        <p>Generated on ${new Date().toLocaleDateString()}</p>
        <p>${companies.length} companies selected</p>
      </div>
      
      ${companies
        .map(
          (company) => `
        <div class="company">
          <div class="company-name">${company.name}</div>
          <div class="company-meta">
            <span class="badge">${company.industry}</span>
            <span class="badge">${company.size}</span>
            ${company.veteranHiring ? '<span class="badge veteran">Veteran Friendly</span>' : ""}
            ${company.remoteWork ? '<span class="badge remote">Remote Work</span>' : ""}
            ${company.securityClearance ? '<span class="badge clearance">Security Clearance</span>' : ""}
          </div>
          
          <div class="description">${company.description}</div>
          
          <div class="section">
            <div class="section-title">Locations:</div>
            <div class="list">
              ${company.locations.map((location) => `<span class="list-item">${location}</span>`).join("")}
            </div>
          </div>
          
          <div class="section">
            <div class="section-title">Functional Areas:</div>
            <div class="list">
              ${company.functionalAreas.map((area) => `<span class="list-item">${area}</span>`).join("")}
            </div>
          </div>
          
          <div class="section">
            <div class="section-title">Available Roles:</div>
            <div class="list">
              ${company.roles.map((role) => `<span class="list-item">${role}</span>`).join("")}
            </div>
          </div>
          
          <div class="section">
            <div class="section-title">Benefits:</div>
            <ul>
              ${company.benefits.map((benefit) => `<li>${benefit}</li>`).join("")}
            </ul>
          </div>
          
          <div class="section">
            <div class="section-title">Website:</div>
            <a href="${company.website}" class="website">${company.website}</a>
          </div>
        </div>
      `,
        )
        .join("")}
    </body>
    </html>
  `
}
