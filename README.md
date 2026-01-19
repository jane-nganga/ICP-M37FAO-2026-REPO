# ICP-M37FAO-2026-REPO

## Cloud Internship Project Repository

### Portal Access
- **ID**: ICP-M37FAO-2026
- **Repository**: ICP-M37FAO-2026-REPO

---

## Week 1: Cloud Fundamentals - Static Site Hosting

### Project Description
Deployed a static website on AWS S3 with CloudFront CDN integration for faster content delivery.

### Technologies Used
- AWS S3 (Static Website Hosting)
- AWS CloudFront (CDN)
- HTML5, CSS3, JavaScript
- Git & GitHub

### Live URLs
- **S3 Website Endpoint**: [Add your S3 URL here after deployment]
- **CloudFront CDN**: [Add your CloudFront URL here after deployment]

### Project Structure
```
ICP-M37FAO-2026-REPO/
├── README.md
└── week-1-static-site/
    ├── index.html
    ├── style.css
    └── script.js
```

### Deployment Steps

#### 1. S3 Bucket Setup
- Created S3 bucket: `icp-m37fao-2026-static-site`
- Region: us-east-1
- Disabled "Block all public access"

#### 2. Upload Files
- Uploaded index.html, style.css, script.js to S3 bucket

#### 3. Enable Static Website Hosting
- Enabled static website hosting in bucket properties
- Set index document: index.html

#### 4. Configure Bucket Policy
Applied public read access policy:
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
        }
    ]
}
```

#### 5. CloudFront CDN Setup
- Created CloudFront distribution
- Origin: S3 bucket
- Enabled HTTPS redirect
- Set default root object: index.html

### Testing
✅ Website accessible via S3 endpoint
✅ Website accessible via CloudFront CDN
✅ All pages and resources loading correctly
✅ JavaScript functionality working

### Challenges & Solutions
**Challenge**: 403 Forbidden error when accessing website
**Solution**: Properly configured bucket policy to allow public read access

### Future Improvements
- Add custom domain name
- Implement SSL certificate
- Add more pages and features
- Set up CI/CD pipeline

---

### Repository Maintenance
This repository contains all assignments for the cloud internship program.
Each week's project will be organized in separate folders.

**Last Updated**: 19.01.2026

