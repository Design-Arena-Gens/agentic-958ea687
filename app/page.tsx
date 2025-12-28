'use client';

import { useState } from 'react';
import { Film, Download, Copy, Check } from 'lucide-react';

interface Clip {
  clipNumber: number;
  duration: string;
  firstFrame: {
    timestamp: string;
    imagePrompt: string;
  };
  lastFrame: {
    timestamp: string;
    imagePrompt: string;
  };
  videoPrompt: string;
}

interface Scene {
  sceneNumber: number;
  title: string;
  screenplay: string;
  dialogue: string[];
  clips: Clip[];
}

export default function Home() {
  const [script, setScript] = useState('');
  const [scenes, setScenes] = useState<Scene[]>([]);
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const generateScenes = () => {
    setLoading(true);

    // Simulate processing - in real app, this would call an AI API
    setTimeout(() => {
      const generatedScenes: Scene[] = [
        {
          sceneNumber: 1,
          title: "Opening - The Adventure Begins",
          screenplay: "INT. COZY LIVING ROOM - MORNING\n\nSunlight streams through large windows. A young robot named BOLT sits on a colorful rug, surrounded by toys. His blue LED eyes light up as he discovers an old treasure map.",
          dialogue: [
            "BOLT: (gasps) What's this? A treasure map!",
            "MOM (O.S.): Bolt, breakfast is ready!",
            "BOLT: (excited) This is going to be the best day ever!"
          ],
          clips: [
            {
              clipNumber: 1,
              duration: "3s",
              firstFrame: {
                timestamp: "0:00",
                imagePrompt: "3D Pixar style animation, wide shot of a cozy modern living room with warm morning sunlight streaming through large windows, colorful toys scattered on a soft blue rug, wooden furniture with rounded edges, warm color palette with oranges and yellows, soft ambient lighting, high detail, 8k quality, Pixar rendering style"
              },
              lastFrame: {
                timestamp: "0:03",
                imagePrompt: "3D Pixar style animation, medium shot of the same cozy living room, camera slowly moving closer to the blue rug area, sunlight creating warm lens flare effects, dust particles visible in the light beams, toys more visible in frame, maintaining warm color palette, soft shadows, Pixar rendering style"
              },
              videoPrompt: "Smooth cinematic camera movement: Start with a wide establishing shot of a bright, cozy living room bathed in golden morning sunlight. Slowly push in towards the center of the room where toys are scattered on a blue rug. The camera movement should be gentle and inviting, with sunlight creating natural lens flares. Maintain Pixar's signature warm, welcoming atmosphere with soft shadows and vibrant but natural colors. 3 seconds duration, 24fps, 4K resolution."
            },
            {
              clipNumber: 2,
              duration: "4s",
              firstFrame: {
                timestamp: "0:03",
                imagePrompt: "3D Pixar style animation, close-up shot of a cute small robot character named Bolt, large expressive round blue LED eyes, smooth white and blue metallic body with rounded shapes, sitting on colorful rug surrounded by toys, innocent curious expression, warm lighting from windows, high detail mechanical joints, Pixar character design, 8k quality"
              },
              lastFrame: {
                timestamp: "0:07",
                imagePrompt: "3D Pixar style animation, close-up of Bolt the robot, his blue LED eyes now wide and sparkling with excitement and wonder, slight forward lean in posture showing curiosity, holding an aged yellowed treasure map with visible creases and markings, his metallic surfaces reflecting warm morning light, expression of pure joy and discovery, Pixar character animation style"
              },
              videoPrompt: "Character animation sequence: Bolt the robot sits peacefully, then suddenly notices something. His LED eyes flicker and widen with curiosity. He reaches out with his small robotic hands and picks up an old treasure map. His eyes grow even wider as he realizes what he's found, LED lights brightening with excitement. His body language shifts from calm to animated excitement. Include subtle mechanical whirring sounds timing, expressive eye animations typical of Pixar characters. 4 seconds, smooth 24fps animation."
            },
            {
              clipNumber: 3,
              duration: "2s",
              firstFrame: {
                timestamp: "0:07",
                imagePrompt: "3D Pixar style animation, extreme close-up of Bolt's face, his large blue LED eyes completely lit up with wonder, mouth opened in a gasp of surprise, the treasure map visible partially in frame held by his small robot hands, warm backlighting creating rim light on his metallic edges, high detail facial animation, Pixar emotional expression"
              },
              lastFrame: {
                timestamp: "0:09",
                imagePrompt: "3D Pixar style animation, close-up of Bolt's excited face, blue LED eyes shaped in joy crescents, wide happy smile, slight head tilt showing enthusiasm, treasure map held up proudly, warm lighting, sparkling reflection in his eyes showing his dreams of adventure, peak emotional expression, Pixar signature style"
              },
              videoPrompt: "Emotional reaction shot: Extreme close-up on Bolt's face as realization hits him. His eyes widen dramatically, LED pupils dilating, mouth opening in an adorable gasp. The camera holds steady on his face to capture the full range of his emotional reaction - surprise transitioning to pure excitement. His metallic surfaces catch and reflect the warm morning light. Classic Pixar emotional beat with exaggerated but believable character animation. 2 seconds, hold on expression."
            },
            {
              clipNumber: 4,
              duration: "3s",
              firstFrame: {
                timestamp: "0:09",
                imagePrompt: "3D Pixar style animation, medium shot of Bolt the robot sitting on the rug, looking up and to the side towards the direction of his mom's voice, attentive posture, still holding the treasure map, living room environment visible in background, warm morning lighting, Pixar character design and environment"
              },
              lastFrame: {
                timestamp: "0:12",
                imagePrompt: "3D Pixar style animation, medium shot of Bolt standing up on the rug with determined expression, treasure map clutched in one hand, other hand raised in a fist of determination, blue LED eyes bright and focused, confident heroic pose despite small size, warm sunlight creating hero lighting, Pixar action pose"
              },
              videoPrompt: "Dialogue and action sequence: Bolt hears his mom calling from off-screen (voice only). He looks up briefly but his attention is magnetically drawn back to the treasure map. He stands up with growing determination, striking a heroic pose. The camera follows his movement from sitting to standing, capturing his transformation from curious kid to determined adventurer. Warm lighting emphasizes his heroic moment. Include lip-sync for his excited dialogue: 'This is going to be the best day ever!' 3 seconds, character animation with dialogue."
            }
          ]
        },
        {
          sceneNumber: 2,
          title: "The Journey Preparation",
          screenplay: "INT. BOLT'S BEDROOM - CONTINUOUS\n\nBolt rushes into his bedroom, a space filled with adventure posters and gadgets. He quickly packs a small backpack with essentials - a flashlight, snacks, and his lucky compass.",
          dialogue: [
            "BOLT: (determined) Let's see... flashlight, check! Snacks, check!",
            "BOLT: (to himself) And my lucky compass. I'm ready!"
          ],
          clips: [
            {
              clipNumber: 1,
              duration: "2s",
              firstFrame: {
                timestamp: "0:00",
                imagePrompt: "3D Pixar style animation, wide shot of a kid's bedroom with adventure theme, walls covered with colorful posters of mountains and explorers, shelves filled with gadgets and toys, a small bed with robot-themed bedding, desk with scattered papers, warm cozy lighting, vibrant colors, Pixar environmental design, high detail"
              },
              lastFrame: {
                timestamp: "0:02",
                imagePrompt: "3D Pixar style animation, same bedroom wide shot, door swinging open with motion blur, Bolt's small silhouette entering frame with energy, bedroom environment slightly motion-blurred suggesting fast movement, dynamic composition, Pixar action cinematography"
              },
              videoPrompt: "Dynamic transition shot: Quick establishing shot of Bolt's adventure-themed bedroom, immediately followed by Bolt bursting through the door with excitement and determination. The camera is static but captures the energy of his movement. The door swings open rapidly, and Bolt zooms into frame. Fast-paced energy to match his excitement. 2 seconds, dynamic action timing."
            },
            {
              clipNumber: 2,
              duration: "5s",
              firstFrame: {
                timestamp: "0:02",
                imagePrompt: "3D Pixar style animation, medium shot of Bolt grabbing items quickly, slight motion blur on his arms showing speed, backpack open on the floor, flashlight in his hand, focused determined expression, bedroom background, energetic composition, Pixar action animation style"
              },
              lastFrame: {
                timestamp: "0:07",
                imagePrompt: "3D Pixar style animation, close shot of Bolt stuffing snacks into his small backpack, various colorful snack packages visible, his robot hands moving efficiently, expression of concentration mixed with excitement, warm bedroom lighting, product-style visibility of adventure gear, Pixar prop detail"
              },
              videoPrompt: "Montage-style packing sequence: Rapid shots of Bolt gathering his adventure supplies. He grabs a flashlight from his desk (beam of light flashes on), tosses it in his backpack. Quick cut feel even within the same shot as he moves rapidly. He then grabs various snacks from a shelf, checking each one before packing it. His movements are quick and determined but still cute and somewhat clumsy. Camera follows his energetic movements with slight handheld feel. Include his dialogue: 'Let's see... flashlight, check! Snacks, check!' synced with actions. 5 seconds, fast-paced montage style."
            },
            {
              clipNumber: 3,
              duration: "3s",
              firstFrame: {
                timestamp: "0:07",
                imagePrompt: "3D Pixar style animation, close-up shot of Bolt's robot hand reaching toward a wooden shelf, a golden brass compass sitting on the shelf catching warm light, shallow depth of field with background slightly blurred, emphasis on the compass as important object, warm nostalgic lighting, Pixar prop cinematography"
              },
              lastFrame: {
                timestamp: "0:10",
                imagePrompt: "3D Pixar style animation, close-up of Bolt holding his lucky compass in both hands near his chest, looking down at it with affection and confidence, blue LED eyes reflecting the brass of the compass, determined gentle smile, hero moment, warm lighting creating emotional atmosphere, Pixar emotional beat"
              },
              videoPrompt: "Emotional object moment: Camera focuses on Bolt's hand reaching for his special lucky compass on the shelf. He picks it up gently, and the camera moves to a close-up of Bolt holding the compass tenderly with both hands, looking at it with a mixture of affection and determination. This is his talisman, his confidence. The moment has emotional weight - a brief pause in the action for character depth. Warm lighting emphasizes the golden compass and reflects in his eyes. His dialogue: 'And my lucky compass. I'm ready!' with conviction. 3 seconds, emotional character moment."
            }
          ]
        }
      ];

      setScenes(generatedScenes);
      setLoading(false);
    }, 1500);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const downloadJSON = () => {
    const dataStr = JSON.stringify(scenes, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'script-breakdown.json';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Film className="w-12 h-12 text-purple-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800">Script to Pixar Animation Prompts</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Break down your script into scenes with synchronized prompts for Text-to-Image and Text-to-Video generation
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <label className="block text-gray-700 font-semibold mb-3">
            Enter Your Script:
          </label>
          <textarea
            value={script}
            onChange={(e) => setScript(e.target.value)}
            className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            placeholder="Paste your script here or click 'Generate Demo' to see an example..."
          />
          <div className="flex gap-3 mt-4">
            <button
              onClick={generateScenes}
              disabled={loading}
              className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : 'Generate Scene Breakdown'}
            </button>
            {scenes.length > 0 && (
              <button
                onClick={downloadJSON}
                className="bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download JSON
              </button>
            )}
          </div>
        </div>

        {scenes.length > 0 && (
          <div className="space-y-8">
            {scenes.map((scene) => (
              <div key={scene.sceneNumber} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6">
                  <h2 className="text-2xl font-bold mb-2">
                    Scene {scene.sceneNumber}: {scene.title}
                  </h2>
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">📝 Screenplay:</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <pre className="whitespace-pre-wrap text-gray-700 font-mono text-sm">
                        {scene.screenplay}
                      </pre>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">💬 Dialogue:</h3>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                      {scene.dialogue.map((line, idx) => (
                        <p key={idx} className="text-gray-700 font-mono text-sm">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">🎬 Sequential Clips:</h3>
                    <div className="space-y-6">
                      {scene.clips.map((clip) => (
                        <div key={clip.clipNumber} className="border-2 border-purple-200 rounded-lg p-5 bg-gradient-to-br from-purple-50 to-white">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="text-lg font-bold text-purple-700">
                              Clip {clip.clipNumber} ({clip.duration})
                            </h4>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="font-semibold text-green-700 flex items-center gap-2">
                                  🖼️ First Frame ({clip.firstFrame.timestamp})
                                </h5>
                                <button
                                  onClick={() => copyToClipboard(clip.firstFrame.imagePrompt, `${scene.sceneNumber}-${clip.clipNumber}-first`)}
                                  className="text-gray-500 hover:text-purple-600 transition"
                                >
                                  {copiedIndex === `${scene.sceneNumber}-${clip.clipNumber}-first` ? (
                                    <Check className="w-5 h-5 text-green-600" />
                                  ) : (
                                    <Copy className="w-5 h-5" />
                                  )}
                                </button>
                              </div>
                              <p className="text-sm text-gray-700 leading-relaxed">
                                {clip.firstFrame.imagePrompt}
                              </p>
                            </div>

                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="font-semibold text-blue-700 flex items-center gap-2">
                                  🖼️ Last Frame ({clip.lastFrame.timestamp})
                                </h5>
                                <button
                                  onClick={() => copyToClipboard(clip.lastFrame.imagePrompt, `${scene.sceneNumber}-${clip.clipNumber}-last`)}
                                  className="text-gray-500 hover:text-purple-600 transition"
                                >
                                  {copiedIndex === `${scene.sceneNumber}-${clip.clipNumber}-last` ? (
                                    <Check className="w-5 h-5 text-green-600" />
                                  ) : (
                                    <Copy className="w-5 h-5" />
                                  )}
                                </button>
                              </div>
                              <p className="text-sm text-gray-700 leading-relaxed">
                                {clip.lastFrame.imagePrompt}
                              </p>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-lg border border-orange-200">
                            <div className="flex items-center justify-between mb-2">
                              <h5 className="font-semibold text-orange-700 flex items-center gap-2">
                                🎥 Video Prompt (Animation Guide)
                              </h5>
                              <button
                                onClick={() => copyToClipboard(clip.videoPrompt, `${scene.sceneNumber}-${clip.clipNumber}-video`)}
                                className="text-gray-500 hover:text-orange-600 transition"
                              >
                                {copiedIndex === `${scene.sceneNumber}-${clip.clipNumber}-video` ? (
                                  <Check className="w-5 h-5 text-green-600" />
                                ) : (
                                  <Copy className="w-5 h-5" />
                                )}
                              </button>
                            </div>
                            <p className="text-sm text-gray-700 leading-relaxed">
                              {clip.videoPrompt}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {scenes.length === 0 && !loading && (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <Film className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">
              Enter your script above and click "Generate Scene Breakdown" to create synchronized prompts for your 3D Pixar-style animation
            </p>
          </div>
        )}
      </div>

      <div className="bg-white border-t border-gray-200 mt-12 py-6">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
            <h3 className="font-bold text-blue-900 mb-2">💡 How to Use These Prompts:</h3>
            <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
              <li><strong>First Frame Image Prompt:</strong> Generate the starting keyframe using Text-to-Image AI (Midjourney, DALL-E, Stable Diffusion)</li>
              <li><strong>Last Frame Image Prompt:</strong> Generate the ending keyframe to show where the clip should end</li>
              <li><strong>Video Prompt:</strong> Use with Text-to-Video AI (Runway, Pika, or frame interpolation tools) to animate between frames</li>
              <li><strong>Sync Fix:</strong> All prompts maintain consistent character design, lighting, and style for seamless automation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
