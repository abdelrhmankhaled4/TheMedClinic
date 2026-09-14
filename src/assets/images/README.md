# Clinic Images Directory

## REPLACE REAL CLINIC IMAGES

This directory is for storing actual clinic images. Currently, the website uses elegant placeholders.

### Required Images:

1. **reception.jpg** - Clinic reception area
2. **waiting-area.jpg** - Waiting area for patients
3. **treatment-room-1.jpg** - Treatment room 1
4. **treatment-room-2.jpg** - Treatment room 2
5. **equipment.jpg** - Medical equipment
6. **doctor.jpg** - Dr. Nada or clinic team

### Image Guidelines:

- **Format**: WebP preferred for performance, JPG/PNG acceptable
- **Size**: 
  - Gallery images: 800x600px minimum, 1200x900px recommended
  - Hero image: 1920x1080px minimum
  - Thumbnails: 400x300px
- **File size**: Keep under 500KB per image for optimal performance
- **Quality**: High quality but optimized for web

### How to Add Images:

1. Place your images in this directory
2. Ensure filenames match the names listed above
3. The website will automatically load them
4. Update the `GALLERY_IMAGES` array in `src/app/data/clinic-data.ts` if you use different filenames

### Alternative:

You can also update the image paths in `src/app/data/clinic-data.ts` to point to your hosted images or CDN.
