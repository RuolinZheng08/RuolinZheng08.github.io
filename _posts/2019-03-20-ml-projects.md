---
layout: post
title: UChicago CMSC 25400 Machine Learning Projects
---

I completed 5 projects during my Machine Learning course in Winter 2019, they are: **K-Means Clustering; the Perceptron; Viola-Jones Face Detector; Neural Net; and Long-Short Term Memory for sentence prediction**.

## Project 2 K-Means Clustering
**Description:** Implement the **k-means clustering** algorithm to classify unlabeled images of digits from the MNIST dataset. Initialize the centroid distribution with **k-means++** (decreased chance to choose a new centroid close to the already chosen ones) instead of random initialization. Compare the convergence graph of the two methods.
#### [Read My Project Write-Up and Code on GitHub](https://github.com/RuolinZheng08/cmsc25400-machine-learning/blob/master/project2)
<span>
  <img src="{{ site.baseurl }}/images/ml-p2-kmeans.png" style="width: 350px;"/>
  <img src="{{ site.baseurl }}/images/ml-p2-kmeanspp.png" style="width: 350px;"/>
</span>
<img src="{{ site.baseurl }}/images/ml-p2-result.png" style="width: 350px;"/>

## Project 3 Perceptron
**Description:** Implement the **perceptron** algorithm for binary classification, distinguishing between images of "3" and "5" from the MNIST dataset. Use the perceptron as a batch algorithm instead of an online one by repeatedly feeding the same dataset. Determine the optimal number of times to feed the dataset in order to minimize errors with **Cross-Validation**.
#### [Read My Project Write-Up and Code on GitHub](https://github.com/RuolinZheng08/cmsc25400-machine-learning/blob/master/project3)
<img src="{{ site.baseurl }}/images/ml-p3-result.png" style="width: 700px;"/>

## Project 4 Viola-Jones Face Detector
**Description:** Implement a face detector as the [Viola-Jones paper](https://www.cs.cmu.edu/~efros/courses/LBMV07/Papers/viola-cvpr-01.pdf) describes, using **Haar filters, Boosting, and Cascade** techniques. **Haar filters** are edge detectors; and there are a lot of distinctive edge features in a human face (the T-shaped area around the nose, for instance.) Most of these filters are "weak", meaning that their correctness rate is just slightly better than pure chance (as in a coin flip.) The **AdaBoost (Adaptive Boosting)** algorithm combine several of these weak learner together into a strong learner, called a booster. Each trial of AdaBoost produces a booster, and together they form our face detector. When we evaluate the detector on a large test image, **Cascading** helps to improve efficiency; it immediately rejects an image patch as non-face once a single booster concludes so.  
Due to computational power constraint, I generated only 20000+ Haar filters (16000+ two-rectangles ones and 4000+ three-rectangle ones) as my base features. The dataset consists of 2000 face images and 2000 non-face ones.  
In the result pictures that follow, the detector predicted around 70 blocks as human faces (plotted with pyplot in red), 22 out of which (manually marked in cyan) turn out to be actual human faces.  
Although the result leaves much to be desired (which is not too surprising as the original VJ paper had 160000+ Haar filters), it offers me much insight for improvements. 
#### [Read My Project Write-Up and Code on GitHub](https://github.com/RuolinZheng08/cmsc25400-machine-learning/blob/master/project4)
<span>
  <img src="{{ site.baseurl }}/images/ml-p4-result.png" style="width: 350px;"/>
  <img src="{{ site.baseurl }}/images/ml-p4-eyeball.png" style="width: 350px;"/>
</span>

## Project 5 Neural Network
**Description:** Implement a **Neural Net (Forward Pass + Back Propagation)** from scratch to classify digits from the MNIST dataset.
#### [Read My Project Write-Up and Code on GitHub](https://github.com/RuolinZheng08/cmsc25400-machine-learning/blob/master/project5)
<img src="{{ site.baseurl }}/images/ml-p5-result.png" style="width: 700px;"/>

## Project 6 Long-Short Term Memory (LSTM)
**Description:** Implement a **LSTM** model using basic **PyTorch** utilities (without its built-in LSTMCell, LSTM classes.) Given 6000 sentence pairs as training data, train the model to predict the second sentence from the first sentence. LSTM is a variant of the **Recurrent Neural Network (RNN)**, which prevents the network from losing information about previous states. For the purpose of this project, LSTM considers both the context (long-term, from the first sentence) and the hidden variable at the previous state (short-term, from the previous word) to predict the current word.  
As the training result turns out, the fact that LSTM picks up the pronouns quite fast speaks to its strength in remembering longer-term context (i.e., first word of the first sentence.) Despite deviating from the ground truth sentences, the predictions actually make logical sense when you read them. (ex., "dinner" is associated with "eat"; the predictions follow grammatical structures and contain phrases like "decided to".)
#### [Read My Project Write-Up and Code on GitHub](https://github.com/RuolinZheng08/cmsc25400-machine-learning/blob/master/project6)
<img src="{{ site.baseurl }}/images/ml-p6-result.png" style="width: 700px;"/>