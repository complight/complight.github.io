# Course work I: COMP0160 Perception and Interfaces


**Release date:** hour on Day/01/2022

**Due date:** hour on Day/02/2022

**Instructor:** Kaan Akşit


## Background
[COMP0160: Perception and Interface Course](https://www.ucl.ac.uk/module-catalogue/modules/perception-and-interfaces-COMP0160) offers students a gateway to get familiar with various aspects of perception and interfaces.
This document is designed to explain to you the task that has to be conducted by students for delivering a successful work as an outcome of your assignment.
Specifically, the documentation is for the first-course work in the perception and interfaces course.
The topic of the first-course work is related to the human visual system.
As the students compile their course work, they will have a strong understanding of how the human visual system works under different eye prescriptions (e.g., myopia, astigmatism).
Having a detailed understanding of the given topic can help students to have insights towards solving problems in domains such as computational displays, perceptual graphics and computational imaging.
The software tools used in this course are publicly available. 
They are shared across the forefront of various industries and academia (e.g., data science to computational approaches in physics, biology or chemistry).

## Requirements
This assignment assumes that you have an understanding of programming with [Python](https://www.python.org/) language and you are familiar with [Torch](https://pytorch.org/) library that provides access to linear algebra calculations. 
Within this assignment, you will be asked to deliver your solution in [a Jupyter Notebook](https://jupyter.org/) format. 
The students are expected to be familiar with working Jupyter Notebooks and know the details regarding saving notebooks so that they can deliver their work for evaluation in the required form.
We typically use [Matplotlib](https://matplotlib.org/) library for plotting purposes while using Jupyter Notebooks.

In our production machines, we use the Python distribution `3.9.7`, Torch distribution `1.9.0`, Matplotlib distribution `3.3.4` and Jupyter Notebook distribution `6.2.0`.
For successfully compiling the assignment, make sure to have these libraries installed on your computer properly.
Given that you are going to compile your work with `Torch`, you can either choose to run your code on `CPU` or `GPU` by selecting the proper device in your code.
However, at the time you deliver your code, please make sure that your code runs on `CPU`.
As a practical observation, you can also get a sense of speed differences in between those two devices and report within your Jupyter notebook (optional).
We typically run these on a Linux operating system. 
However, it is not a requirement for students to use the same operating system as these components also run on your favourite operating system (e.g., Windows, Android, Mac OS or alike).
In your course work, make sure to add `docstring` type documentation for every function in your code and make sure to comment in between lines to explain your steps within a function.

Before starting with the tasks, we encourage students to attend the second lecture of the perception and interfaces course, namely `Lecture 2: Visual Perception in Perceptual Graphics and Computational Displays` (recording available on [Moodle](https://moodle.ucl.ac.uk/)).

### Some useful links for beginners:

- [Absolute beginners guide for Python and Jupyter Notebook](https://www.youtube.com/watch?v=Z1Yd7upQsXY)
- [Simple algebric operations in Torch](https://github.com/GunhoChoi/Kind-PyTorch-Tutorial/blob/master/01_Tensor_Basics/pytorch_tensor_basic.ipynb),

**Special note from your instructor:** We design this homework to make you be better in your next in your life.
If you do not have the right background to use the tools proposed in this coursework or if you are a confused absolute beginner, please do not hesitate to reach out to us through Moodle.
We are here to support you.
Please carefully frame your questions as you approach us for support (e.g., what you want to ask and what you expect) so that we can support you at our best.

## Problem description
Each and every one of us has a unique visual system.
At the heart of our visual system lies our eyes.
Our eyes can be simplified as an optical instrument that images a three-dimensional scene to our retinas, sensor alike cellular structure.
In this assignment, your task is to develop a user interface on a Jupyter Notebook that simulates how our visions are being affected by various kinds of eye prescriptions.
To simply put, how would you perceive a scene if you had a certain prescription.
We expect you to have this simulator in live view, enabling the user to choose different eye prescriptions based on [Zernike Polynomials](https://en.wikipedia.org/wiki/Zernike_polynomials).
Before conducting any work, we suggest you go through the listed references below:

- [Zernike Polynomials](https://en.wikipedia.org/wiki/Zernike_polynomials),
- [Watson, Andrew B. "Computing human optical point spread functions." Journal of Vision 15.2 (2015): 26-26,](https://doi.org/10.1167/15.2.26)
- [Chakravarthula, Praneeth, et al. "Gaze-contingent retinal speckle suppression for perceptually-matched foveated holographic displays." IEEE Transactions on Visualization and Computer Graphics 27.11 (2021): 4194-4203,](https://doi.org/10.1109/TVCG.2021.3106433) -- observe Figure 4 here for sample point-spread functions.
- [Animation examples with Matplotlib](https://www.youtube.com/watch?v=GtZxk8Wa3Jw) and [Widgets with Matplotlib](https://www.youtube.com/watch?v=vtC5laIgMJc),

In addition, you can get a sense of the importance of prescription in next-generation display technologies by going through the survey paper below (actual industrial applications from learning of this course work):

- [Koulieris, George Alex, et al. "Near‐eye display and tracking technologies for virtual and augmented reality." Computer Graphics Forum. Vol. 38. No. 2. 2019.](https://doi.org/10.1111/cgf.13654)

These references can help you to find the required technical details for your subtasks.


## Zernike Polynomial generator (10 points)
The first task is to derive a Pythonic class that can generate Zernike Polynomials on demand.
These polynomials can help you to represent the point-spread functions of people with a prescription.
A point-spread function can be best described as the system response of your eye to a given scene.
In the way you will use point-spread functions, they can be described as kernels that can help you describe your eye as a linear transform or a system that is represented with a single convolution.
Once you have fully compiled the `zernike_polynomial_generator` class in your Notebook, please proceed with the next task:

```python
class zernike_polynomial_generator():

    def __init__(self):
          ...
```

Our expectation from you, in this case, is to have multiple functions in your `zernike_polynomial_generator` class that spits out various point-spread functions, read more from [here](https://en.wikipedia.org/wiki/Optical_aberration#Zernike_model_of_aberrations) (7.5 points).
A person may be having an eye prescription composed of various point-spread functions.
To support such a case, make sure to add a function in your class that outputs a weighted sum of chosen point-spread functions (2.5 points).

## Forward model (10 points)
We will work with an assumption that our eyes are responding to every point on a given scene in the same way (e.g., stationary kernels, not spatially varying kernels).
You have to have a function that is able to load images from a given path.

```python
def load_image(filename):
     """
    Function to load an image.

    Parameters
    ------------
    filename            : str
                                Filename of the image.
    
    Returns
    --------
    image               : torch.tensor
                               Loaded image.
     """
     ....
    return image
```

Please do not hesitate to use images from Creative Commons for your experiments, and please make sure that these images are clean, meaning ethically good to work with.
Please also make sure to work with images that has `1920x1080x3` resolution and please reduce the image into a single color image by taking the average across second axis (`1920x1080` - Black and white).
Make sure to provide the image that you use together with your Jupyter Notebook in a compressed file format (ZIP).

You will be using this specific image load definition to load images, and you will process these images with your forward model function.
Here forward model corresponds to convolving the loaded image with a combination of Zernike polynomials to simulate various kinds of eye prescriptions.
In the simplest form, your forward model should look like below:

```python
def forward(image, psf):
     """
    Forward model, convolving the given image with a given point-spread function.

    Parameters
    ------------
    image              : torch.tensor
                               Image as a torch tensor (MxN).
    psf                   : torch.tensor
                              Point-spread function as a torch tensor (MxN).
    
    Returns
    --------
    result               : torch.tensor
                               Abberated image.
     """
     ....
     return result
```

You will receive your 3 points for loading images properly (3 points).
The remaining 7 points will be dedicated to the forward model definition (7 points).


**Hint for the forward model:** [torch.nn.Conv2d](https://pytorch.org/docs/stable/generated/torch.nn.Conv2d.html) (Do not necessarilly have to use it but can help).


## Visualizer (10 points) 
The last bit we want you to add to the Jupyter Notebook is related to the way you will be visualizing the outcome of your forward model.
We want your code to be interactive as much as you can make it to be on 
your given computer hardware.
Make sure to visualize images of your forward model using `Matplotlib`.
Make sure to provide buttons and controls for your users to choose different combinations of Zernike polynomial to formulate a point-spread function, and make sure to visualize the point-spread functions that you have generated.
Note that we will heavily be relying on your visualizer to assess the outcome of your code; please pay attention to make sure that you have provided all the controls (either as variables to manipulate or buttons or sliders), and they are easy for a user to work with.
Note that you are allowed to use other libraries beyond `Matplotlib` such as `Pyplot` or if you want to develop a user interface outside of the boundaries of a Jupyter Notebook, it is also ok.
But if you do that, please make sure that you have communicated the change in a clear fashion and we are able to run your code.

If you can plot the outcome of the forward model, this plotting can guarantee you half of the points you can receive (5 points).
The remaining points can be received as you introduce more sophistication to your visualizer, as explained above (5 points).

## Problem and potential solutions (15 points)
We want you to add a text section to your notebook, where you will find an unsolved/partially solved scientific problem related to eye prescription and visuals (displays, graphics or any other form).
The source of this problem can be from the existing literature, and please make sure to survey using your favourite search engines, academic ones and non-academic ones (e.g., [Brave](https://search.brave.com/), [Google Scholar](https://scholar.google.com/), etc.).
The problem can also rely on your practical observations as well as long as you describe it clearly.
You also provide potential solutions to the problem that you have found from the literature and your own predictions towards new solutions in the future.
The text can not be more than 500 words, no less than 250 words.
Note that the length of your text is not an indicator of success, and most powerful writing happens in shorter forms.

You will receive half of the points from your problem description (7.5 points).
The remaining half will be from your proposed solution (7.5 points).

## Contacting Us
The prefered way of communication is through University College London's online lecture system, [Moodle](https://moodle.ucl.ac.uk/). 
Please use the Moodle forum for your questions related to the course work.
