# How to Add Your Profile Photo

## Step 1: Add Your Photo
1. Place your profile photo in the `public` folder
2. Name it `profile-photo.jpg` (or .png)
3. Make sure it's a square image (recommended: 600x600 pixels or larger)

## Step 2: Photo Requirements
- **Format**: JPG, PNG, or WebP
- **Size**: Square aspect ratio (1:1)
- **Dimensions**: At least 300x300 pixels (600x600 recommended)
- **File size**: Under 2MB for best performance

## Step 3: File Location
```
your-project/
├── public/
│   └── profile-photo.jpg  ← Place your photo here
├── src/
└── ...
```

## Step 4: Alternative Names
If you prefer a different filename, update the `src` in `src/components/Home/Home.js`:
```jsx
<img 
  src="/your-photo-name.jpg"  ← Change this line
  alt="Nathan Bussabok" 
  className="profile-image"
/>
```

## Step 5: Test
- Save the file
- Refresh your browser
- Your photo should now appear as a circular image above your name

## Troubleshooting
- **Photo not showing**: Check the filename and path
- **Wrong size**: Make sure the image is square
- **Poor quality**: Use a higher resolution image
- **File too large**: Compress the image before adding

That's it! Your profile photo will now appear in the Home section.
