import React, { useState } from 'react';
import { Input, Button, Form, FormGroup, Label, Container } from 'reactstrap';

export interface YouTubeEmbedLinkInputProps {
  onVideoLinkChange: (videoId: string | null) => void;
}

const YouTubeEmbedLinkInput: React.FC<YouTubeEmbedLinkInputProps> = ({
  onVideoLinkChange
}) => {
  const [url, setUrl] = useState('');
  const [videoId, setVideoId] = useState<string | null>(null);

  const extractVideoId = (url: string): string | null => {
    const regex =
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = extractVideoId(url);
    setVideoId(id);
    onVideoLinkChange(id);
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="youtubeUrl">URL del video de YouTube</Label>
          <Input
            type="text"
            id="youtubeUrl"
            placeholder="https://www.youtube.com/watch?v=..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </FormGroup>
        <Button type="submit" color="success">
          Ver Video
        </Button>
      </Form>

      {videoId && (
        <div className="mt-4">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            // frameBorder="0"
            allowFullScreen
          />
        </div>
      )}
    </Container>
  );
};

export default YouTubeEmbedLinkInput;
