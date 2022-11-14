import tour from "../models/tourModel.js";

export const addTour = async (req, res) => {
  try {
    const { name, state, Description, Image1,Image2,Image3 } = req.body;
    const Tour = await tour.create({
      name,
      state,
      Description,
      Image1,
      Image2,
      Image3
    });
    res.status(201).json({
        status: 'success',
        data:{
            Tour
        }
    })
  } catch (error) {
    res.status(500).json({
        status: 'error',
        message:"An error Occured"
    })
    console.log(error)
  }
};

export const getTour = async (req, res) => {
  try {
    const Tour = await tour.findById(req.params.id)
    res.status(200).json({
      status: 'success',
      data:{
        Tour
      }
    })
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message:"An error occured"
    })
    console.log(error)
  }
}

export const getAllTours = async (req, res) => {
  try {
    const Tour = await tour.find()
    res.status(200).json({
      status: 'success',
      results:Tour.length,
      data:{
        Tour
      }
    })
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message:"An error occured"
    })
    console.log(error)
  }
}

export const updateTour = async (req, res) => {
  try {
    const Tour = await tour.findByIdAndUpdate(req.params.id,req.body,{
      new:true,
      runValidators: true
    })
    res.status(201).json({
      status: 'success',
      data:{
        Tour
      }
    })
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message:"An error occured"
    })
    console.log(error)
  }
}

export const deleteTour = async (req, res) => {
  try {
    const Tour = await tour.findByIdAndDelete(req.params.id)
    res.status(204).json({
      status: 'success',
      message:"Tour has been deleted"
    })
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message:"An error occured"
    })
    console.log(error)
  }
}

export const deleteAllTour =  (req, res) => {
  try {
     tour.delete_many( { } )
    res.status(204).json({
      status: 'success',
      message:" all Tours has been deleted",
    })
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message:"An error occured"
    })
    console.log(error)
  }
}
