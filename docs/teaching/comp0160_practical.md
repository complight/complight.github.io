---
header-includes:
  - \hypersetup{colorlinks=false,
            allbordercolors={0 0 0},
            pdfborderstyle={/S/U/W 1}}
---
# Welcome

**Start date:** 12:00 pm, 14th January 2022,

**Duration:** This description is valid for first four weeks of practical sessions.

Welcome to the practical session for COMP0160: Perception and Interfaces. This course is designed to offer you, the students, a gateway to get familiar with various aspects of perception and interfaces.

In your lectures, you will learn about the human visual system and how humans perceive light from their surroundings.
Specifically, the course "Visual Perception in graphics and displays", held between 17th January and 23rd January 2022, will teach you how eyes gaze and perceive their surroundings. 

In these practical sessions, we provide the opportunity for you to get familiarized with standard tools used in computer graphics. 
These tools will help you translate what you learn from the courses to an actual outcome.
The rest of this document will describe your task in these practical sessions.
Remember that the task description provided here contains the information on the session's aims, objectives, and goals.
But the description does not necessarily contain all the steps required to conduct your work.
This case is because everybody learns things in a slightly different way.
We create that environment to elaborate by not strictly telling you which steps to take.

**Please make sure to bring your personal laptop with you if you are physically attending.**

Once again welcome to COMP0160 practical sessions!
[Kaan Akşit](https://kaanaksit.com)

# Background (15 minutes)

Imagine you woke up to ten years from now on.
You have long graduated from your program, and you found yourself a job in the industry.
Guess what your job is about!
It is about humans and their perceptions.

The company that you are working at builds [digital humans](https://www.theverge.com/tldr/22821377/digital-human-as-a-service-kddi-mawari) and [avatars](https://www.theverge.com/2021/11/2/22758974/microsoft-teams-metaverse-mesh-3d-avatars-meetings-features) to represent people or their artificial intelligence-powered bots.
These bots offer innovative assistance services such as representing you when you are unavailable (multi conversation) or offering you services that are carried out by human workers today (e.g., call centres).
These efforts are for their upcoming revolution in virtual environments, or more popularly known as Metaverse nowadays.

In this hypothetical future, your manager calls you from your virtual reality device while having your first coffee of the day.
She assigns you as the lead for upgrading the eye model that they use in their avatars and bots.
They want to make sure that the eyes rendered at these avatars look realistic and physically plausible.

You now have these flashbacks, remembering that you learned in some class in the past called "Visual Perception in Graphics and Displays" how eyes rotate, shift and view.

In this exercise, please put that information into work, and we ask you to build an eye model that rotates by following the constraints taught in that class.
In short, your task is to build a 3D model of the eye that follows physical constraints while gazing (e.g., eyeballs can not rotate 180 degrees, today's cutting-edge PC games make such easy mistakes).

# Tools (45 minutes)
In this practical, you will be using [Blender 3D](https://blender.org), an open-source tool for modelling and rendering with state of the art in computer graphics.

Please make sure to download Blender 3D to your production machine and familiarise yourself with the software controls.
You can find many tutorials online by typing Blender tutorial in your favourite search engine (e.g., Google) or cloud video platform (e.g., YouTube).

# Create a mesh of your face (1 hour)
Your first target in this practice is to figure out how to create a mesh of your face from a photograph.
This way, we will use the face mesh you created to place the two eyeballs that we aim to add.
Once again, there are multiple tutorials online (e.g., [sample tutorial](https://www.youtube.com/watch?v=5WH7s-IPIeM)), which you can easily search for.
You are free to choose your way of creating a mesh of your face.
You can also rely on the methods that offer [one click add-on base solutions](https://www.youtube.com/watch?v=cgMqNkVSKdA).

Once the face mesh is created, please remove the triangles where your eye should be and make sure to texture your face mesh using your photograph.

# Adding the eyeballs (45 minutes)
Our next step is to add the eyeballs to your face mesh.
Following the geometry that you have learned from the lecture, you will be creating an eyeball that is faithful to the physiology of the eye.
These eyeballs will later be placed on the face mesh that you generated.
There are again multiple tutorials online that you can rely on to generate a realistic-looking eyeball (e.g., [sample tutorial](https://www.youtube.com/watch?v=JcHX4AT1vtg)).
Once you are complete with this task, make sure to place these eyeballs on your face mesh.

# Realistic gaze (15 minutes)
Now that you have generated a face mesh and two eyeballs for your face mesh, please explore the option of constraints in the Blender 3D.
Our aim here is to add a target (e.g., a box) at some distance in front of the face mesh, and we want our newly generated digital avatar to gaze at the target.
You have to identify means to rotate the eyeballs such that they always gaze at the box.
But remember, you also learned how much and how far an eyeball can rotate in the lecture.
We want to be able to add that as a constrain as well.
So once the target moves, eyeballs should rotate, but they shouldn't turn beyond their rotation ability.

# Changing the iris size with light levels (1 hour)
This last task is entirely optional.
You will seek means to change iris diameter with the light levels in the environment of your digital avatar.
As a first step, make sure to set the target you have created to be a light source.
Since our digital avatar is always gazing at it, this target's light level will determine the size of the iris.
You learned how large or small an iris could be in your lecture.
We want you to manipulate the eyeball mesh procedurally with the light level of your target.

# Conclusion
You may have multiple questions during practical.
Do not hesitate to reach out to us at [the practical time](https://complightlab.com/teaching/comp0160_perception_and_interfaces/#practical) or via [Moodle](https://moodle.ucl.ac.uk/).
Once you are complete with practical and trust that you have generated an excellent digital avatar, please let us know as this can return as an investment towards improving your final mark from this course.
If you provide your consent (since this is containing your personal data -- your face), you can also share your blender file with us by uploading it to a cloud service (Microsoft One Drive provided by the university), share the link of the file with us through an email. 
In your email, please make sure to state under what licence you are providing us the Blender file (e.g, MIT License, Creative Commons), and please make sure to state if you allow us to use this data in scientific research in the future.
Note that this exercise is also beneficial for your final assignment, and it can potentially help you achieve your task in your final project.

